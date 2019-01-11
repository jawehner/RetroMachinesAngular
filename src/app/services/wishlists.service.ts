import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  { Api_Url } from './api.service';
import { Wishlist } from '../models/Wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistsService {

  constructor(private _http: HttpClient) { }

  getWishlists() {
    return this._http.get(`${Api_Url}/Wishlists`, {headers: this.getHeaders()})
  }
  
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  createWishlist(wishlist: Wishlist) {
    return this._http.post(`${Api_Url}/Wishlists`, wishlist, { headers: this.getHeaders()})
  }
}
