import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product'
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit {

  constructor(private _productService: ProductsService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe((products: Product[]) => {
    })
  }

}
