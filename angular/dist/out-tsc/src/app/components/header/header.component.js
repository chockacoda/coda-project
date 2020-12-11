import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(loginService) {
        this.loginService = loginService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthenticationService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map