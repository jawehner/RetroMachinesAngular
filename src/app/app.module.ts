import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsService } from './service/products.service';
import { ProductIndexComponent } from './components/product/product-index/product-index.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductIndexComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
