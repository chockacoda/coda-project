import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';
import {  Movie } from 'src/app/domain/Movie';
import { SelectItem } from 'primeng/primeng';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class adminViewComponent implements OnInit {
  cols: any[];
  movies: Movie[];
  displayedColumns: string[] = ['Movie Name', 'Cast AND Crew', 'Movie genre', 'action'];

  displayMovieList = true;
  displayMovieAdd = false;
  displayMovieEdit = false;

  constructor(private movieService: MovieService, private loginservice: AuthenticationService,private router: Router, private notifier: NotifierService) {
  }

  /**
   ngOnInit used for intial display.
  */
  ngOnInit() {

    if(this.loginservice.isAdmin){
    this.displayMovieList = true;
    this.displayMovieAdd = false;
    this.displayMovieEdit = false;

    this.getMovieList(sessionStorage.getItem('userId')).subscribe((data) => { this.movies = data });

    this.cols = [
      { field: 'movie_name', header: 'Movie Name' },
      { field: 'movie_crew', header: 'Movie Description' },
      { field: 'movie_genre', header: 'Movie genre' },
      { header: 'Action' }
    ];

    this.statusValues = [
      { label: 'ANIMATION', value: 'ANIMATION' },
      { label: 'ACTION', value: 'ACTION' },
      { label: 'DRAMA', value: 'DRAMA' }
      
    ];
  }
  }

  /**
   this method is used for getting list of movies.
  */
  getMovieList(id) {
    return this.movieService.getMovieList(id);
  }

  
  /**
   this method is used for getting movie based on the id.
  */
  getMovie(MovieId) {
    return this.movieService.getMovie(MovieId);
  }

  /**
  this method is used for editting movie based on the id.
  */
  editMovie(MovieId) {
    this.displayMovieList = false;
    this.displayMovieEdit = true;
    this.router.navigate([`/movie-edit/${MovieId}`]);
  }

  /**
  this method is used for deletion movie based on the id.
  */
  deleteMovie(movieId) {
    console.log("Delete id : " + movieId);
    this.movieService.deleteMovie(movieId).subscribe((data) => {
      console.log("success");
      this.notifier.notify("success", "Movie deleted successfully!!");
    });
    this.getMovieList(sessionStorage.getItem('userId')).subscribe((data) => { this.movies = data });
  }

  /**
  this method is used for enabling and disbaling flag.
  */
  addMovie() {
    console.log("Before = " + this.displayMovieList + "  " + this.displayMovieAdd);
    this.displayMovieList = false;
    this.displayMovieAdd = true;
    console.log("After =" + this.displayMovieList + "  " + this.displayMovieAdd);
  }

  
  /**
  method to a add movie.
  */
 hideMovieAdd(event) {
    console.log("Event emiited " + event);
    this.displayMovieList = true;
    this.displayMovieAdd = event;
  }

  /**
  this method is used for for maintaining the data before editing ,which can be fetched on cancel button.
  */
  clonedTodos: { [s: string]: Movie; } = {};
  statusValues: SelectItem[];

  /**
  this method is used for for editing in the same view.
  */
  onRowEditInit(todo: Movie) {
    this.clonedTodos[todo.movie_id] = { ...todo };
  }

  /**
  this method is used saving the edited value in db.
  */
  onRowEditSave(movie: Movie) {
    this.movieService.updateMovie(movie.movie_id, movie).subscribe((data) => {
      console.log("success");
      this.notifier.notify("success", "Task updated successfully!!");
    });
  }


  /**
  this method is used when on cancelling the edit,the data are fetched from the cloned model.
  */
  onRowEditCancel(movie: Movie, index: number) {
    this.movies[index] = this.clonedTodos[movie.movie_id];
    delete this.clonedTodos[movie.movie_id];
  }
}
