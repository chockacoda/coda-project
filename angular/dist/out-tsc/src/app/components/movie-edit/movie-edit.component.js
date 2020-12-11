import * as tslib_1 from "tslib";
import { Component, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { EventEmitter } from 'events';
var MovieEditComponent = /** @class */ (function () {
    function MovieEditComponent(activatedRoute, movieService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.movieService = movieService;
        this.valueChange = new EventEmitter();
        activatedRoute.params.subscribe(function (params) {
            _this.movieid = params.id;
        });
        this.displayMovieEdit = true;
        this.initializeMovieForm();
    }
    /**
     ngOnInit used for intial display.
    */
    MovieEditComponent.prototype.ngOnInit = function () {
    };
    /**
     initializeMovieForm used building the form.
    */
    MovieEditComponent.prototype.initializeMovieForm = function () {
        this.formGroup = this.formBuilder.group({
            name: ['', [Validators.required]],
            desc: ['', [Validators.required]],
            status: ['', [Validators.required]]
        });
    };
    /**
     getMovieById method is used for fetching the movie name based on the id.
     * @param id
    */
    MovieEditComponent.prototype.getMovieById = function (id) {
        var _this = this;
        this.movieService.getMovie(id).subscribe(function (res) {
            _this.movie = res;
            _this.formGroup.patchValue({
                movie_name: _this.movie.movie_name,
                movie_genre: _this.movie.movie_genre,
                movie_crew: _this.movie.movie_crew
            });
        });
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], MovieEditComponent.prototype, "valueChange", void 0);
    MovieEditComponent = tslib_1.__decorate([
        Component({
            selector: 'movie-edit',
            templateUrl: './movie-edit.component.html',
            styleUrls: ['./movie-edit.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, MovieService])
    ], MovieEditComponent);
    return MovieEditComponent;
}());
export { MovieEditComponent };
//# sourceMappingURL=movie-edit.component.js.map