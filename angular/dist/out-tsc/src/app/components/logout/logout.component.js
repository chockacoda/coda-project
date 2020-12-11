import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    /**
     ngOnInit used for intial display.
    */
    LogoutComponent.prototype.ngOnInit = function () {
        this.authenticationService.logOut();
        this.router.navigate(['login']);
    };
    LogoutComponent = tslib_1.__decorate([
        Component({
            selector: 'logout',
            templateUrl: './logout.component.html',
            styleUrls: ['./logout.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthenticationService,
            Router])
    ], LogoutComponent);
    return LogoutComponent;
}());
export { LogoutComponent };
//# sourceMappingURL=logout.component.js.map