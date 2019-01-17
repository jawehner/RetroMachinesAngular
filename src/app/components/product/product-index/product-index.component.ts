import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/Product'
import { ProductsService } from 'src/app/services/products.service';
import { MatTableDataSource } from '@angular/material';
import { WishlistsService } from 'src/app/services/wishlists.service'
import { Wishlist, WishlistCreate } from 'src/app/models/Wishlist';
import { $ } from 'protractor';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})


export class ProductIndexComponent implements OnInit {

  columnNames= ['Name', 'Type', 'Condition', 'Year', 'details', 'edit', 'delete', 'Wishlist'];
  
  dataSource: MatTableDataSource<Product>
  wishlist: Wishlist;

  constructor(private _productService: ProductsService, private _wishListService: WishlistsService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe((products: Product[]) => {
      this.dataSource = new MatTableDataSource<Product>(products);
      console.log(this.dataSource)
    })
    
  }


  createWishList() {
    this._wishListService.createWishlist(this.wishlist).subscribe(data => {
      console.log(data)
      // this._router.navigate(['/products']);
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
