import { NgModule, ViewChildren } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { UserViewComponent } from './components/user-view/user-view';
import { adminViewComponent } from './components/admin-view/admin-view.component';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { AuthGaurdUserService } from './services/auth-user-gaurd.service';
import { AuthLogoutGaurdService } from './services/auth-logout-gaurd.service';
import { RegisterComponent } from './components/registeration/register.component';

const routes: Routes = [
  { path: 'movie-list', component: adminViewComponent,canActivate:[AuthGaurdService] },
  { path: 'movie-add', component: MovieAddComponent ,canActivate:[AuthGaurdService] ,data:{role: ["ADMIN"]} },
  { path: 'movie-edit/:id', component: MovieEditComponent,canActivate:[AuthGaurdService] },
  { path: '', component: LoginComponent},
  { path: 'user-view', component: UserViewComponent,canActivate:[AuthGaurdUserService] ,data:{role: ["USER"]}},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthLogoutGaurdService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
