import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { AuthenticationService } from 'src/app/services/authentication.service';
var UserViewComponent = /** @class */ (function () {
    function UserViewComponent(movieService, loginservice, router, notifier) {
        this.movieService = movieService;
        this.loginservice = loginservice;
        this.router = router;
        this.notifier = notifier;
        this.collapsed = true;
    }
    /**
       ngOnInit used for intial display.
      */
    UserViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.loginservice.isUser) {
            this.getMovieList().subscribe(function (data) {
                _this.movies = data;
            });
        }
    };
    /**
       getMovieList used to get the list.
      */
    UserViewComponent.prototype.getMovieList = function () {
        return this.movieService.getMovieList();
    };
    /**
     getMenuData return the list of data.
    */
    UserViewComponent.prototype.getMenuData = function () {
        if (this.movies)
            return this.movies;
    };
    UserViewComponent = tslib_1.__decorate([
        Component({
            selector: 'user-card',
            templateUrl: './user-view.component.html',
            styleUrls: ['./user-view.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [MovieService, AuthenticationService, Router, NotifierService])
    ], UserViewComponent);
    return UserViewComponent;
}());
export { UserViewComponent };
//# sourceMappingURL=user-view.js.map