import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var BasicAuthHtppInterceptorService = /** @class */ (function () {
    function BasicAuthHtppInterceptorService() {
    }
    BasicAuthHtppInterceptorService.prototype.intercept = function (req, next) {
        if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
            req = req.clone({
                setHeaders: {
                    Authorization: sessionStorage.getItem('token')
                }
            });
        }
        return next.handle(req);
    };
    BasicAuthHtppInterceptorService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], BasicAuthHtppInterceptorService);
    return BasicAuthHtppInterceptorService;
}());
export { BasicAuthHtppInterceptorService };
//# sourceMappingURL=basic-auth-htpp-interceptor.service.js.map