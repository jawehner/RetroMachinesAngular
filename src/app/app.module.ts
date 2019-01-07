import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatToolbarModule,
         MatButtonModule,
         MatFormFieldModule,
         MatInputModule
} from '@angular/material';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';

const routes = [
  { path: 'register', component: RegistrationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
