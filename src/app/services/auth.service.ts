import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import  { Api_Url } from '../../environments/environment.prod';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root' 
})
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor( private _http: HttpClient, private _router: Router, private _jwtHelperService: JwtHelperService) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}/Auth/Register`, regUserData);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this._jwtHelperService.isTokenExpired(token);
  }

  login(loginInfo) {
    return this._http.post(`${Api_Url}/Auth/Login`, loginInfo).subscribe( (token: any) => {
      localStorage.setItem('id_token',token.token);
      localStorage.setItem('admin', token.admin);
      console.log(token);
      this.isLoggedIn.next(true);
      this._router.navigate(['/home']);
      window.location.reload();
    });
  }

  currentUser() :boolean {
    if(!localStorage.getItem('token')) {return false;}
    return true;
  }

  isAdminUser(): boolean {
    if(localStorage.getItem('admin') == "true") {return true;}
    return false;
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);

    const authHeader = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  
    this._http.post(`${Api_Url}/api/Account/Logout`, {headers: authHeader});
    this._router.navigate(['/login'])
    window.location.reload();
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
