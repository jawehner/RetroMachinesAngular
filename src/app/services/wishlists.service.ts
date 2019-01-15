import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  { Api_Url } from './api.service';
import { Wishlist } from '../models/Wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistsService {

  constructor(private _http: HttpClient) { }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
  
  createWishlist(wishlist: Wishlist) {
    return this._http.post(`${Api_Url}/Wishlists`, wishlist, { headers: this.getHeaders()})
  }

  getWishlist(id: string) {
    return this._http.get(`${Api_Url}/Wishlists/${id}`, {headers: this.getHeaders() });
  }

  updateWishlist(wishlist: Wishlist) {
    return this._http.put(`${Api_Url}/Wishlist`, wishlist, { headers: this.getHeaders() })
  }
}
