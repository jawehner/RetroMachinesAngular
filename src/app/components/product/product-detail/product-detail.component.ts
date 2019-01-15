import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/Product';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  token: any;
  decodedToken: any;
  userId: any;

  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductsService, private _jwtHelper: JwtHelperService) { }

  ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.decodedToken = this._jwtHelper.decodeToken(this.token);
    this.userId = this.decodedToken.nameid;
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._productService.getProduct(routeData.get('id')).subscribe((singleProduct: Product) =>{
        this.product = singleProduct;
        console.log(this.product)
        // console.log(routeData);
      })
    })
  }

}
