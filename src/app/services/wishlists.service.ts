import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  { Api_Url } from './api.service';
import { Wishlist, WishlistCreate } from '../models/Wishlist';
import { Product } from '../models/Product';
import { WishlistDetailComponent } from '../components/wishlist/wishlist-detail/wishlist-detail.component';

@Injectable({
  providedIn: 'root'
})
export class WishlistsService {
  constructor(private _http: HttpClient) { }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
  
  createWishlist(wishlist: Wishlist) {
    return this._http.post(`${Api_Url}/Wishlist`, wishlist, { headers: this.getHeaders()})
  }

  getWishlist(id: string) {
    return this._http.get(`${Api_Url}/Wishlist/${id}`, {headers: this.getHeaders() });
  }

  updateWishlist(wishlist: Wishlist) {
    return this._http.put(`${Api_Url}/Wishlist`, wishlist, { headers: this.getHeaders() })
  }

  // deleteItemFromWishlist(id: string){
  //   return this._http.delete(`${Api_Url}/Product/${id}`, {headers: this.getHeaders() });
  // }
  
  addItemToWishlist(productId: WishlistCreate){
    return this._http.post(`${Api_Url}/Wishlist`, productId, {headers: this.getHeaders() });
  }
}
