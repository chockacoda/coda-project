import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { UserViewComponent } from './components/user-view/user-view';
import { adminViewComponent } from './components/admin-view/admin-view.component';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
var routes = [
    { path: 'movie-list', component: adminViewComponent },
    { path: 'movie-add', component: MovieAddComponent, canActivate: [AuthGaurdService], data: { role: ["admin"] } },
    { path: 'movie-edit/:id', component: MovieEditComponent },
    { path: '', component: LoginComponent },
    { path: 'user-view', component: UserViewComponent, canActivate: [AuthGaurdService], data: { role: ["user"] } },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes)
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map