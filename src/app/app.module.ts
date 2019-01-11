import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule,
         MatButtonModule,
         MatFormFieldModule,
         MatInputModule,
         MatTableModule } from '@angular/material';
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
import { WishlistDetailComponent } from './components/wishlist/wishlist-detail/wishlist-detail.component';
import { WishlistEditComponent } from './components/wishlist/wishlist-edit/wishlist-edit.component';

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
    WishlistDetailComponent,
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
    AppRoutingModule
  ],
  providers: [
    AuthService,
    ProductsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
