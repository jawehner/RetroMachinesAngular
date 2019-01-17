import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/Product'
import { ProductsService } from 'src/app/services/products.service';
import { MatTableDataSource } from '@angular/material';
import { JwtHelperService } from '@auth0/angular-jwt'
import { WishlistsService } from 'src/app/services/wishlists.service'
import { Wishlist, WishlistCreate } from 'src/app/models/Wishlist';
import { $ } from 'protractor';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})

export class ProductIndexComponent implements OnInit {

  columnNames= ['Name', 'Type', 'Condition', 'Year', 'Seller', 'buttons' , 'Wishlist'];
  
  dataSource: MatTableDataSource<Product>
  token: any;
  decodedToken: any;
  userId: any;
  wishlist: Wishlist;

  constructor(private _productService: ProductsService, private _jwtHelper: JwtHelperService, private _wishListService: WishlistsService) { }

  ngOnInit() {
    this.token = localStorage.getItem('id_token');
    this.decodedToken = this._jwtHelper.decodeToken(this.token);
    this.userId = this.decodedToken.nameid;
    this._productService.getProducts().subscribe((products: Product[]) => {
      console.log(products);
      this.dataSource = new MatTableDataSource<Product>(products);
    })
  }

  createWishList() {
    this._wishListService.createWishlist(this.wishlist).subscribe(data => {
      console.log(data)
    })
  }

  addToWishlist(productId: number){
    var wishlistItem: WishlistCreate = {
      productId : productId,
    }
    this._wishListService.addItemToWishlist(wishlistItem).subscribe(data => {
      console.log(data)
      // this._router.navigate(['/products']);
    }, (error: any) => {
      console.log(error)
    });
  }
}
