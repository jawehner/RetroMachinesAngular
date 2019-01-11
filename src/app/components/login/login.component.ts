import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private _form: FormBuilder, private authService: AuthService) { 
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

  onSubmit() { 
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value);
  }
}
