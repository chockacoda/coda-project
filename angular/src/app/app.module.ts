import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './material.module';
import { CustomPrimengModule } from './primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieService } from './services/movie.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { BasicAuthHtppInterceptorService } from './services/basic-auth-htpp-interceptor.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthGaurdService } from './services/auth-gaurd.service';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { UserViewComponent } from './components/user-view/user-view';
import { adminViewComponent } from './components/admin-view/admin-view.component';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 

@NgModule({
  declarations: [
    AppComponent,
    adminViewComponent,
    MovieAddComponent,
    MovieEditComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    UserViewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    CustomPrimengModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule, 
    MatButtonModule,
    FormsModule,
    NgbModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'left',
          distance: 550
        },
        vertical: {
          position: 'top',
          distance: 120,
          gap: 12
        }
      },
      theme: 'material',
      behaviour: {
        autoHide: 4000,
        onClick: false,
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
      },
      animations: {
        enabled: true,
        show: {
          preset: 'slide',
          speed: 300,
          easing: 'ease'
        },
        hide: {
          preset: 'fade',
          speed: 300,
          easing: 'ease',
          offset: 50
        },
        shift: {
          speed: 300,
          easing: 'ease'
        },
        overlap: 150
      }
    })
  ],

  exports: [
    AppComponent,
    adminViewComponent,
    MovieAddComponent,
    MovieEditComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent],

  entryComponents: [LoginComponent],

  providers: [MovieService, AuthGaurdService, AuthenticationService, {
    provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
