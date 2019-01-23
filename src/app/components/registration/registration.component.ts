import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public _registerForm: FormGroup;

  constructor(private _form: FormBuilder, private _authService: AuthService, public snackBar: MatSnackBar,
     private _router: Router) {this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this._registerForm = this._form.group({
      userName: new FormControl,
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    });
  }

  onSubmit() {
    console.log(this._registerForm.value);
    this._authService
    .register(this._registerForm.value)
    .subscribe( () => this._authService.login(this._registerForm.value));
    this._router.navigate(['/home']);
  }
  // openSnackBar(message: string, action: string) {
  //   this.snackBar.open(message, action, { duration: 5000, });
  // }
}
