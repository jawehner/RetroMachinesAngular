import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  isLoggedin: boolean;
  isAdminUser: boolean;

  constructor(public authService: AuthService, private _router: Router) { }

  ngOnInit() {

    // this.isLoggedIn = this.authService.isLoggedIn();

    this.authService.isLoggedIn.subscribe((loggedInUserStatus: boolean) =>{
      this.isLoggedin = loggedInUserStatus;

    });
  }
  
  onLoggout() {
    this.authService.logout();
    this.isLoggedin = false;
    this._router.navigate(['/login']);
  }
  
}

export interface UserData  {
  user: string;
  isloggedin: boolean;
}
