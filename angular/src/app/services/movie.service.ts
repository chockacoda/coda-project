import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Movie } from '../domain/Movie';
import { Rating } from '../domain/individual-rating';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  endpoint = 'http://localhost:3000/api';

  constructor(private httpClient: HttpClient) {
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
    /**
   * getRating is used to get the average rating the movie.
   * 
   * @param movieId 
   */
  public getRating(rating): Observable<any> {

    return this.httpClient.post<Rating>("http://localhost:3000/api/getAverageRating",rating);
  }

  /**
   * deleteMovie is used to delete the movie.
   * 
   * @param movieId 
   */
  public deleteMovie(movieId) {

    return this.httpClient.delete<Movie>("http://localhost:3000/api/deleteMovie" + "/" + movieId);
  }

  /** 
   * createMovie is add a new movie.
   * 
   * @param movie 
   */
  public createMovie(movie) {

    return this.httpClient.post<Movie>("http://localhost:3000/api/addMovie", movie);
  }

    /**
   * register is add a new user.
   * 
   * @param register 
   */
  public register(register){
    return this.httpClient.post<any>("http://localhost:3000/api/register", register);
  }

   /**
   * usernameCheckUnique is to check if the user name is unique.
   * 
   * @param register 
   */
  public usernameCheckUnique(username){

    return this.httpClient.get<any>(this.endpoint + '/usernameCheckUnique/' + username);

  }
  /**
   * getMovieList is used to get  the movie list.
   * 
   * 
   */
  getMovieList(id): Observable<any> {
    
    return this.httpClient.get<Movie[]>('http://localhost:3000/api/getMovieList'+ "/" + id);
  }

  /**
   * getMovie is used to get the movie based on the id.
   * 
   * @param todoId 
   */
  getMovie(id): Observable<Movie> {

    return this.httpClient.get<Movie>(this.endpoint + '/getMovieById/' + id);
  }
  
  /**
   * updateMovie is used to update the movie
   * 
   * @param todoId 
   */
  updateMovie(id, movie): Observable<Movie> {
    
    return this.httpClient.put<Movie>(this.endpoint + '/updateMovie' , movie);
      
  }

}
