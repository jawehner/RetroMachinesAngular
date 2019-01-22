import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ProductIndexComponent } from './components/product/product-index/product-index.component';
import { HomeComponent } from './components/home/home.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { WishlistDetailComponent } from './components/wishlist/wishlist-detail/wishlist-detail.component';
// import { AuthGuard } from './guards/auth.guard';
import { ContactComponent } from './components/contact/contact.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuard } from './guards/auth/admin.guard'

const routes: Routes = [
  { path: 'admin',
    canActivate: [
      AuthGuard,
      AdminGuard
    ],
      children: [
        {
          path: '',
          component: AdminComponent
        }
      ]
    },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', //canActivate: [AuthGuard] , 
  children: [
    {path: '', component: ProductIndexComponent},
    {path: 'create', component: ProductCreateComponent},
    {path: 'name/:id', component: ProductDetailComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'delete/:id', component: ProductDeleteComponent},
    {path: 'edit/:id', component: ProductEditComponent},
  ]},
  { path: 'user', component: UserComponent},
  { path: 'wishlist', children: [
    {path: '', component: WishlistDetailComponent},
    {path: 'contact', component: ContactComponent},
  ]},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}