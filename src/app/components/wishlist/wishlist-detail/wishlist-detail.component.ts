import { Component, OnInit } from '@angular/core';
import { Wishlist } from 'src/app/models/Wishlist';
import { ActivatedRoute } from '@angular/router';
import { WishlistsService } from 'src/app/services/wishlists.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatTableDataSource } from '@angular/material'
import { ProductDetailComponent } from '../../product/product-detail/product-detail.component';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-wishlist-detail',
  templateUrl: './wishlist-detail.component.html',
  styleUrls: ['./wishlist-detail.component.css']
})
export class WishlistDetailComponent implements OnInit {
  columnNames = ['ProductId' , 'Contact Seller' , 'Name' , 'Remove']
  dataSource: MatTableDataSource<Product>
  wishlistProductId: Wishlist[] = [];
  wishlistDataSource: WishlistDetailComponent[] = [];
  i: number = 0;
  j: number = 0;
  wishlist: Wishlist;
  token: string;
  decodedToken: any;
  userId: any;
  _router: any;
  transactionalId: any;
  

  constructor(private _activatedRoute: ActivatedRoute, private _wishlistService: WishlistsService, private _jwtHelper: JwtHelperService) { }

  ngOnInit() {
    
    this.token = localStorage.getItem('id_token');
    this.decodedToken = this._jwtHelper.decodeToken(this.token);
    this.userId = this.decodedToken.nameid;

    this._activatedRoute.paramMap.subscribe(routeData => {
      this._wishlistService.getWishlist(this.userId).subscribe((listItem: Product[]) => { 
        this.dataSource = new MatTableDataSource<Product>(listItem)
        console.log(this.dataSource)
        
      });
    });
  }
  onDelete(id : number) {
    this._wishlistService.deleteItemFromWishlist(id).subscribe(() => { //it's breaking HERE
      // this._router.navigate(['/wishlist']);
      
    })
  }

}
