import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
var User = /** @class */ (function () {
    function User(status) {
        this.status = status;
    }
    return User;
}());
export { User };
var JwtResponse = /** @class */ (function () {
    function JwtResponse(jwttoken) {
        this.jwttoken = jwttoken;
    }
    return JwtResponse;
}());
export { JwtResponse };
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpClient) {
        this.httpClient = httpClient;
    }
    AuthenticationService.prototype.authenticate = function (username, password) {
        return this.httpClient.post('http://localhost:8081/authenticate', { username: username, password: password }).pipe(map(function (userData) {
            sessionStorage.setItem('username', username);
            var tokenStr = 'Bearer ' + userData.token;
            sessionStorage.setItem('token', tokenStr);
            sessionStorage.setItem('auth', userData.role);
            return userData;
        }));
    };
    AuthenticationService.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem('username');
        console.log('Is User Logged in: ' + !(user === null));
        return !(user === null);
    };
    AuthenticationService.prototype.logOut = function () {
        sessionStorage.removeItem('username');
    };
    AuthenticationService.prototype.isAdmin = function () {
        var user = sessionStorage.getItem('auth');
        return (user === "admin");
    };
    AuthenticationService.prototype.isUser = function () {
        var user = sessionStorage.getItem('auth');
        return (user === "user");
    };
    AuthenticationService.prototype.activeuser = function () {
        return sessionStorage.getItem('auth');
    };
    AuthenticationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], AuthenticationService);
    return AuthenticationService;
}());
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map