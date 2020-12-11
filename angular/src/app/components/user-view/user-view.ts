import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import {  Movie } from 'src/app/domain/Movie';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'user-card',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  ctrl = new FormControl(null, Validators.required);
  movies: Movie[];
  collapsed:boolean=true;
  current_rate;
  constructor(private movieService: MovieService,private loginservice:AuthenticationService, private router: Router, private notifier: NotifierService) {
  }

/**
   ngOnInit used for intial display.
  */
  ngOnInit() {
    if(this.loginservice.isUser){
    
    this.getMovieList().subscribe((data) => {
       this.movies = data;
       this.movies.forEach(movie => {
      this.current_rate=this.movieService.getRating(movie);
       });
      });
  }
}

/**
   getMovieList used to get the list.
  */
  getMovieList() {
    return this.movieService.getMovieList();
  }

  /**
   getMenuData return the list of data.
  */
  getMenuData() {
  if(this.movies)
     return this.movies;
  }

}