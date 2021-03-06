import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User{
  constructor(
    public status:string,
     ) {}
  
}

export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  constructor(private httpClient: HttpClient){
  }

  authenticate(username, password) {
    return this.httpClient.post<any>('http://localhost:3000/api/login',{username,password}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        sessionStorage.setItem('userId',userData.user_id);
        let tokenStr= 'Bearer '+userData.token;
        sessionStorage.setItem('token', tokenStr);
        sessionStorage.setItem('auth',userData.role);
       
        return userData;
       }
     )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log('Is User Logged in: '+ !(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
   isAdmin() {
     let user = sessionStorage.getItem('auth');
     return (user === "ADMIN")
}

isUser(){
  let user = sessionStorage.getItem('auth');
     return (user === "USER")
}

activeuser(){
  return sessionStorage.getItem('auth');
}
}
