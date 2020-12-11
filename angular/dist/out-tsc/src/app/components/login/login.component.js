import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotifierService } from 'angular-notifier';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginservice, notifier) {
        this.router = router;
        this.loginservice = loginservice;
        this.notifier = notifier;
        this.username = '';
        this.password = '';
        this.invalidLogin = false;
    }
    /**
     ngOnInit used for intial display.
    */
    LoginComponent.prototype.ngOnInit = function () {
    };
    /**
     checkLogin method is used for authentication.
    */
    LoginComponent.prototype.checkLogin = function () {
        var _this = this;
        (this.loginservice.authenticate(this.username, this.password).subscribe(function (data) {
            if (data['role'] === "user") {
                _this.router.navigate(['user-view']);
            }
            else {
                _this.router.navigate(['movie-list']);
            }
            _this.invalidLogin = false;
            _this.notifier.notify("sucess", "logged in sucessfully!");
        }, function (error) {
            _this.invalidLogin = true;
            _this.notifier.notify("fail", "invalid credential!");
        }));
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            AuthenticationService, NotifierService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map