import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AuthenticationService } from 'src/app/services/authentication.service';
var adminViewComponent = /** @class */ (function () {
    function adminViewComponent(movieService, loginservice, router, notifier) {
        this.movieService = movieService;
        this.loginservice = loginservice;
        this.router = router;
        this.notifier = notifier;
        this.displayedColumns = ['Movie Name', 'Cast AND Crew', 'Movie genre', 'action'];
        this.displayMovieList = true;
        this.displayMovieAdd = false;
        this.displayMovieEdit = false;
        /**
        this method is used for for maintaining the data before editing ,which can be fetched on cancel button.
        */
        this.clonedTodos = {};
    }
    /**
     ngOnInit used for intial display.
    */
    adminViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.loginservice.isAdmin) {
            this.displayMovieList = true;
            this.displayMovieAdd = false;
            this.displayMovieEdit = false;
            this.getMovieList().subscribe(function (data) { _this.movies = data; });
            this.cols = [
                { field: 'movie_name', header: 'Movie Name' },
                { field: 'movie_crew', header: 'Movie Description' },
                { field: 'movie_genre', header: 'Movie genre' },
                { field: 'action', header: 'Action' }
            ];
            this.statusValues = [
                { label: 'ANIMATION', value: 'ANIMATION' },
                { label: 'ACTION', value: 'ACTION' },
                { label: 'DRAMA', value: 'DRAMA' }
            ];
        }
    };
    /**
     this method is used for getting list of movies.
    */
    adminViewComponent.prototype.getMovieList = function () {
        return this.movieService.getMovieList();
    };
    /**
     this method is used for getting movie based on the id.
    */
    adminViewComponent.prototype.getMovie = function (MovieId) {
        return this.movieService.getMovie(MovieId);
    };
    /**
    this method is used for editting movie based on the id.
    */
    adminViewComponent.prototype.editMovie = function (MovieId) {
        this.displayMovieList = false;
        this.displayMovieEdit = true;
        this.router.navigate(["/movie-edit/" + MovieId]);
    };
    /**
    this method is used for deletion movie based on the id.
    */
    adminViewComponent.prototype.deleteMovie = function (movieId) {
        var _this = this;
        console.log("Delete id : " + movieId);
        this.movieService.deleteMovie(movieId).subscribe(function (data) {
            console.log("success");
            _this.notifier.notify("success", "Movie deleted successfully!!");
        });
        this.getMovieList().subscribe(function (data) { _this.movies = data; });
    };
    /**
    this method is used for enabling and disbaling flag.
    */
    adminViewComponent.prototype.addMovie = function () {
        console.log("Before = " + this.displayMovieList + "  " + this.displayMovieAdd);
        this.displayMovieList = false;
        this.displayMovieAdd = true;
        console.log("After =" + this.displayMovieList + "  " + this.displayMovieAdd);
    };
    /**
    method to a add movie.
    */
    adminViewComponent.prototype.hideMovieAdd = function (event) {
        console.log("Event emiited " + event);
        this.displayMovieList = true;
        this.displayMovieAdd = event;
    };
    /**
    this method is used for for editing in the same view.
    */
    adminViewComponent.prototype.onRowEditInit = function (todo) {
        this.clonedTodos[todo.movie_id] = tslib_1.__assign({}, todo);
    };
    /**
    this method is used saving the edited value in db.
    */
    adminViewComponent.prototype.onRowEditSave = function (movie) {
        var _this = this;
        this.movieService.updateMovie(movie.movie_id, movie).subscribe(function (data) {
            console.log("success");
            _this.notifier.notify("success", "Task updated successfully!!");
        });
    };
    /**
    this method is used when on cancelling the edit,the data are fetched from the cloned model.
    */
    adminViewComponent.prototype.onRowEditCancel = function (movie, index) {
        this.movies[index] = this.clonedTodos[movie.movie_id];
        delete this.clonedTodos[movie.movie_id];
    };
    adminViewComponent = tslib_1.__decorate([
        Component({
            selector: 'admin-view',
            templateUrl: './admin-view.component.html',
            styleUrls: ['./admin-view.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [MovieService, AuthenticationService, Router, NotifierService])
    ], adminViewComponent);
    return adminViewComponent;
}());
export { adminViewComponent };
//# sourceMappingURL=admin-view.component.js.map