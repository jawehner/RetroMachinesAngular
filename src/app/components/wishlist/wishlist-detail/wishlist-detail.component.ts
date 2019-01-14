import { Component, OnInit } from '@angular/core';
import { Wishlist } from 'src/app/models/Wishlist';
import { ActivatedRoute } from '@angular/router';
import { WishlistsService } from 'src/app/services/wishlists.service';

@Component({
  selector: 'app-wishlist-detail',
  templateUrl: './wishlist-detail.component.html',
  styleUrls: ['./wishlist-detail.component.css']
})
export class WishlistDetailComponent implements OnInit {

  wishlist: Wishlist;

  constructor(private _activatedRoute: ActivatedRoute, private _wishlistService: WishlistsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._wishlistService.getWishlist(routeData.get('id')).subscribe((singleWishlist: Wishlist) => {
      this.wishlist = singleWishlist;
      });
    });
  }

}
