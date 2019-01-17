import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product'
import { ProductsService } from 'src/app/services/products.service';
import { MatTableDataSource } from '@angular/material';
// import { WishlistsService } from 'src/app/services/wishlists.service';
// import { Wishlist } from 'src/app/models/Wishlist';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})

export class ProductIndexComponent implements OnInit {

  columnNames= ['Name', 'Type', 'Condition', 'Year', 'Seller', 'details', 'edit', 'delete'];
  
  dataSource: MatTableDataSource<Product>

  constructor(private _productService: ProductsService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe((products: Product[]) => {
      this.dataSource = new MatTableDataSource<Product>(products);
      console.log(this.dataSource)
    })

    // onDelete() {
    //   this._wishlist.deleteProduct(this.product.name).subscribe(() => {
    //     this._router.navigate(['/products']);
    //   })
  }
}
