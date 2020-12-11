import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Movie } from '../domain/Movie';

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
  public getRating(movie): Observable<Movie> {

    return this.httpClient.get<Movie>("http://localhost:3000/api/getAverageRating" + "/" + movie.movie_id);
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
   * getMovieList is used to get  the movie list.
   * 
   * 
   */
  getMovieList(): Observable<any> {
    
    return this.httpClient.get<Movie[]>('http://localhost:3000/api/getMovieList');
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
