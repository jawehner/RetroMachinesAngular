import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product'
import { ProductsService } from 'src/app/services/products.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})

export class ProductIndexComponent implements OnInit {
  columnNames= ['UserId', 'Name', 'Type', 'Condition', 'Year'];
  dataSource: MatTableDataSource<Product>

  constructor(private _productService: ProductsService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe((products: Product[]) => {
      this.dataSource = new MatTableDataSource<Product>(products);
    })
  }

}
