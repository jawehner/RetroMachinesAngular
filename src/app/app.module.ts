import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { MatToolbarModule,
         MatButtonModule,
         MatFormFieldModule,
         MatInputModule,
         MatTableModule, 
         MatSnackBar,
         MatSnackBarModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsService } from './services/products.service';
import { ProductIndexComponent } from './components/product/product-index/product-index.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { WishlistDetailComponent } from './components/wishlist/wishlist-detail/wishlist-detail.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/auth/admin.guard'
import { UserComponent } from './components/user/user.component';
import { ContactComponent } from './components/contact/contact.component';
import { WishlistCreateComponent } from './components/wishlist/wishlist-create/wishlist-create.component';
import { AdminComponent } from './components/admin/admin.component';
 import { WishlistEditComponent } from './components/wishlist/wishlist-edit/wishlist-edit.component';

 export function tokenGetter() {
  return localStorage.getItem('token');
 }

// export function getToken(): string {
//   return localStorage.getItem('id_token');
// }

@NgModule({
  declarations: [
    AppComponent,
    ProductIndexComponent,
    RegistrationComponent,
    HeaderComponent,
    LoginComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    HomeComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    WishlistDetailComponent,
    UserComponent,
    ContactComponent,
    WishlistCreateComponent,
    AdminComponent,
    WishlistEditComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
    MatSnackBarModule,
  ],
  
  providers: [
    AuthService,
    ProductsService,
    AuthGuard,
    JwtHelperService,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
