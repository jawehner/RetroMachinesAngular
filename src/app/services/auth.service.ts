import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs'

const Api_Url = 'https://localhost:44311/api/Auth/Register'

@Injectable({
  providedIn: 'root' 
})
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor( private _http: HttpClient, private _router: Router ) { }

  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}`, regUserData);
  }

  login(loginInfo) {
    const str = 
    `grant_type=password&username=
    ${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    
    return this._http.post(`${Api_Url}/Token`, str).subscribe( (token: Token) => {
      localStorage.setItem('id_token',token.access_token);
    });
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }

    return this._http.get(`${Api_Url}/api/Account/UserInfo`, { headers: this.setHeader() });
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);


    return this._http.post(`${Api_Url}/api/Account/Logout`, {headers: this.setHeader() });
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
