import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
var AuthGaurdService = /** @class */ (function () {
    function AuthGaurdService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGaurdService.prototype.canActivate = function (route, state) {
        if (this.authService.isUserLoggedIn())
            return true;
        this.router.navigate(['login']);
        return false;
    };
    AuthGaurdService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            AuthenticationService])
    ], AuthGaurdService);
    return AuthGaurdService;
}());
export { AuthGaurdService };
//# sourceMappingURL=auth-gaurd.service.js.map