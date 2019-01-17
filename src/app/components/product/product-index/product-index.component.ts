import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product'
import { ProductsService } from 'src/app/services/products.service';
import { MatTableDataSource } from '@angular/material';
// import { WishlistsService } from 'src/app/services/wishlists.service';
// import { Wishlist } from 'src/app/models/Wishlist';
import { JwtHelperService } from '@auth0/angular-jwt'

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})

export class ProductIndexComponent implements OnInit {

  columnNames= ['Name', 'Type', 'Condition', 'Year', 'buttons'];
  
  dataSource: MatTableDataSource<Product>
  token: any;
  decodedToken: any;
  userId: any;

  constructor(private _productService: ProductsService, private _jwtHelper: JwtHelperService) { }

  ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.decodedToken = this._jwtHelper.decodeToken(this.token);
    console.log(this.decodedToken)
    this.userId = this.decodedToken.nameid;
    console.log(this.userId)
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
