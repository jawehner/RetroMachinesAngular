// import { Component, OnInit } from '@angular/core';
// import { WishlistsService } from 'src/app/services/wishlists.service';
// import { Wishlist } from 'src/app/models/Wishlist';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-wishlist-edit',
//   templateUrl: './wishlist-edit.component.html',
//   styleUrls: ['./wishlist-edit.component.css']
// })
// export class WishlistEditComponent implements OnInit {

//   wishlist: Wishlist;

//   constructor(private _wishlistService: WishlistsService, private _ar:ActivatedRoute,
//               private _router: Router) {

//     this._ar.paramMap.subscribe(p => {
//       this._wishlistService.getWishlist(p.get('id')).subscribe((singleWishlist: Wishlist)) => {
//       this.wishlist = singleWishlist();
//       });
//     }
//   ngOnInit() {
//   }
// }
