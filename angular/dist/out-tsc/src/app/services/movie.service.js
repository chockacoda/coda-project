import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var MovieService = /** @class */ (function () {
    function MovieService(httpClient) {
        this.httpClient = httpClient;
        this.endpoint = 'http://localhost:8081/api';
        // Http Options
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    /**
     * deleteMovie is used to delete the movie.
     *
     * @param movieId
     */
    MovieService.prototype.deleteMovie = function (movieId) {
        return this.httpClient.delete("http://localhost:8081/api/deleteMovie" + "/" + movieId);
    };
    /**
     * createMovie is add a new movie.
     *
     * @param movie
     */
    MovieService.prototype.createMovie = function (movie) {
        return this.httpClient.post("http://localhost:8081/api/addMovie", movie);
    };
    /**
     * getMovieList is used to get  the movie list.
     *
     *
     */
    MovieService.prototype.getMovieList = function () {
        return this.httpClient.get('http://localhost:8081/api/getMovieList');
    };
    /**
     * getMovie is used to get the movie based on the id.
     *
     * @param todoId
     */
    MovieService.prototype.getMovie = function (id) {
        return this.httpClient.get(this.endpoint + '/getMovieById/' + id);
    };
    /**
     * updateMovie is used to update the movie
     *
     * @param todoId
     */
    MovieService.prototype.updateMovie = function (id, movie) {
        return this.httpClient.put(this.endpoint + '/updateMovie', movie);
    };
    MovieService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], MovieService);
    return MovieService;
}());
export { MovieService };
//# sourceMappingURL=movie.service.js.map