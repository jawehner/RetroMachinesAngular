import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private _form: FormBuilder, private authService: AuthService, public snackBar: MatSnackBar, private _router: Router) { 
    this.createForm();
  }

  ngOnInit() {
    
  }


  createForm() {
    this.loginForm = this._form.group({
      username: new FormControl,
      password: new FormControl
    });
  }

  onSubmit() { debugger;
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value);
    console.log(this.loginForm.value)
    debugger;
    this._router.navigate(['/home'])
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 5000, });
  }
}
