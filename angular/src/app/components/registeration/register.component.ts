import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;

  userIdAlredyExist = "";

  @Output() valueChange = new EventEmitter();
  onRegister: boolean;

  @Input() todo = { user_name: '', password: '', email: '' };

  constructor(private formBuilder: FormBuilder, private router: Router, private movieService: MovieService,
    private notifier: NotifierService, private route: ActivatedRoute) { }

  /**
   ngOnInit used for intial display.
  */
  ngOnInit() {

    this.route.data;
    this.onRegister = true;
    this.initializeMovieForm();

  }

  /**
  this method is to register new user.
  */
  register() {
    if (this.formGroup.valid) {
      let register = this.formGroup.value;
      this.movieService.register(register).subscribe((data: {}) => {
        this.notifier.notify("success", "user register  successfully");
        this.router.navigate(['/']);
      })
    }
  }

  usernameCheckUnique() {
    this.movieService.usernameCheckUnique(this.formGroup.get('user_name').value).subscribe(res => {
      if (!res) {
        this.userIdAlredyExist = "username Alredy Exist";
      }
      else{
        this.userIdAlredyExist = "";
      }
    });
    }

  /**
  form handling method.
  */
  initializeMovieForm() {
    this.formGroup = this.formBuilder.group({
      user_name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }

  /**
  this method is back button operation.
  */
  goBack(): void {
    this.onRegister = false;
    this.valueChange.emit(this.onRegister);
    this.router.navigate(['/']);
  }

}
