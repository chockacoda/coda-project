import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import {  Movie } from 'src/app/domain/Movie';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormControl, Validators } from '@angular/forms';
import { Rating } from 'src/app/domain/individual-rating';

@Component({
  selector: 'user-card',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  ctrl = new FormControl(null, Validators.required);
  movies: Movie[];
  rating:Rating={};
  collapsed:boolean=true;
  constructor(private movieService: MovieService,private loginservice:AuthenticationService, private router: Router, private notifier: NotifierService) {
  }

/**
   ngOnInit used for intial display.
  */
  ngOnInit() {
    if(this.loginservice.isUser){
    this.getMovieList(sessionStorage.getItem('userId')).subscribe((data) => {
       this.movies = data;
  });
}
}

/**
   getMovieList used to get the list.
  */
  getMovieList(id) {
    return this.movieService.getMovieList(id);
  }

  /**
   getRating used to get the list.
  */
 getRating(user_id,movieid,star_rating) {
   this.rating.user_id=user_id;
   this.rating.movie_id=movieid;
   this.rating.individual_rating=star_rating;
  return this.movieService.getRating(this.rating).subscribe((data) => {
    this.notifier.notify("success", "Rating saved successfully!!");
    this.ngOnInit();
  });
}

onRate(event,movieid){
  this.getRating(sessionStorage.getItem('userId'),movieid,event.value);
}

}