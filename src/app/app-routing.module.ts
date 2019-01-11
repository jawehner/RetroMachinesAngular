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

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', children: [
    {path: '', component: ProductIndexComponent},
    {path: 'create', component: ProductCreateComponent},
    {path: 'name/:id', component: ProductDetailComponent},
    {path: 'delete/:id', component: ProductDeleteComponent},
    {path: 'edit/:id', component: ProductEditComponent}
  ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}