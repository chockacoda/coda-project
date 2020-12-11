import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { NotifierService } from 'angular-notifier';
var MovieAddComponent = /** @class */ (function () {
    function MovieAddComponent(formBuilder, router, movieService, notifier, route) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.movieService = movieService;
        this.notifier = notifier;
        this.route = route;
        this.valueChange = new EventEmitter();
        this.todo = { movie_name: '', movie_crew: '', movie_genre: '' };
    }
    /**
     ngOnInit used for intial display.
    */
    MovieAddComponent.prototype.ngOnInit = function () {
        this.route.data;
        this.displayAddMovie = true;
        this.initializeMovieForm();
    };
    /**
    this method is to add the movie.
    */
    MovieAddComponent.prototype.addMovie = function () {
        var _this = this;
        if (this.formGroup.valid) {
            var movie = this.formGroup.value;
            this.movieService.createMovie(movie).subscribe(function (data) {
                _this.notifier.notify("success", "movie added successfully");
            });
        }
    };
    /**
    form handling method.
    */
    MovieAddComponent.prototype.initializeMovieForm = function () {
        this.formGroup = this.formBuilder.group({
            movie_name: ['', [Validators.required]],
            movie_crew: ['', [Validators.required]],
            movie_genre: ['', [Validators.required]]
        });
    };
    /**
    this method is back button operation.
    */
    MovieAddComponent.prototype.goBack = function () {
        this.displayAddMovie = false;
        this.valueChange.emit(this.displayAddMovie);
        this.router.navigate(['/movie-list']);
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], MovieAddComponent.prototype, "valueChange", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], MovieAddComponent.prototype, "todo", void 0);
    MovieAddComponent = tslib_1.__decorate([
        Component({
            selector: 'movie-add',
            templateUrl: './movie-add.component.html',
            styleUrls: ['./movie-add.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, Router, MovieService,
            NotifierService, ActivatedRoute])
    ], MovieAddComponent);
    return MovieAddComponent;
}());
export { MovieAddComponent };
//# sourceMappingURL=movie-add.component.js.map