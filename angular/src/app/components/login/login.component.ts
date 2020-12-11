import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService,private notifier: NotifierService) { }

  /**
   ngOnInit used for intial display.
  */
  ngOnInit() {
   
  }

  /**
   checkLogin method is used for authentication.
  */
  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {

        if(data['role']==="USER"){
          this.router.navigate(['user-view']);
        }
        else {
          this.router.navigate(['movie-list']);
        }
        this.invalidLogin = false
        this.notifier.notify("sucess", "logged in sucessfully!");
        
      },
      error => {
        this.invalidLogin = true
        this.notifier.notify("fail", "invalid credential!");

      }
    )
    );

  }

}
