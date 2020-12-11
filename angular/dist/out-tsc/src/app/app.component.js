import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(userservice) {
        this.userservice = userservice;
        this.title = 'MOVIE REVIEW';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [MovieService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map