import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Movie } from 'src/app/domain/Movie';
import { MovieService } from '../../services/movie.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  displayMovieEdit :boolean;

  /**
   ngOnInit used for intial display.
  */
  ngOnInit() {
    
  }

  movieid: any;
  movie: Movie;
  formGroup: FormGroup;
  formBuilder: FormBuilder;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {
    activatedRoute.params.subscribe(params => {
      this.movieid = params.id;
    });
    this.displayMovieEdit = true;
    this.initializeMovieForm();
  }

  /**
   initializeMovieForm used building the form.
  */
  initializeMovieForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }

  /**
   getMovieById method is used for fetching the movie name based on the id.
   * @param id
  */
 getMovieById(id) {
    this.movieService.getMovie(id).subscribe(res => {
      this.movie = res;
      this.formGroup.patchValue({
        movie_name: this.movie.movie_name,
        movie_genre: this.movie.movie_genre,
        movie_crew: this.movie.movie_crew
      });
    });
  }

}
