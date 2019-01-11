import { Component, OnInit } from '@angular/core';
import { WishlistsService } from '../../../services/wishlists.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent implements OnInit {
    
    wishlistForm: FormGroup;

  constructor(private _wishlistService: WishlistsService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
      this._wishlistService.createWishlist(this.wishlistForm.value).subscribe(data => {
          this._router.navigate(['/wishlist']);
      })
  }
  
}
