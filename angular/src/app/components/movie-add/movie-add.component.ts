import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  formGroup: FormGroup;

  @Output() valueChange = new EventEmitter();
  displayAddMovie: boolean;

  @Input() todo = { movie_name: '', movie_crew: '', movie_genre: '' };

  constructor(private formBuilder: FormBuilder, private router: Router, private movieService: MovieService,
    private notifier: NotifierService, private route: ActivatedRoute) { }

  /**
   ngOnInit used for intial display.
  */
  ngOnInit() {

    this.route.data;
    this.displayAddMovie = true;
    this.initializeMovieForm();

  }

  /**
  this method is to add the movie.
  */
  addMovie() {
    if (this.formGroup.valid) {
      let movie = this.formGroup.value;
      this.movieService.createMovie(movie).subscribe((data: {}) => {
        this.notifier.notify("success", "movie added successfully");
      })
    }
  }

  /**
  form handling method.
  */
  initializeMovieForm() {
    this.formGroup = this.formBuilder.group({
      movie_name: ['', [Validators.required]],
      movie_crew: ['', [Validators.required]],
      movie_genre: ['', [Validators.required]]
    });
  }

  /**
  this method is back button operation.
  */
  goBack(): void {
    this.displayAddMovie = false;
    this.valueChange.emit(this.displayAddMovie);
    this.router.navigate(['/movie-list']);
  }

}
