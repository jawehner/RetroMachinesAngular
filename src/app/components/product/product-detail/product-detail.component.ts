import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private _activateRoute: ActivatedRoute, private _productService: ProductsService) { }

  ngOnInit() {
    this._activateRoute.paramMap.subscribe(routeData => {
      this._productService.getProduct(routeData.get('id')).subscribe((singleProduct: Product) =>{
        this.product = singleProduct;
      })
      // console.log(routeData);
    })
  }

}
