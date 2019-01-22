import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  { Api_Url } from '../../environments/environment.prod';
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

  getWishlist(userId: string) {
    console.log(userId) //its null before it even gets here
    return this._http.get(`${Api_Url}/Wishlist`, {headers: this.getHeaders() });
    
  }

  updateWishlist(wishlist: Wishlist) {
    return this._http.put(`${Api_Url}/Wishlist`, wishlist, { headers: this.getHeaders() })
    
  }

  deleteItemFromWishlist(id: number){
    return this._http.delete(`${Api_Url}/wishlist/${id}`, {headers: this.getHeaders() });
  }
  
  addItemToWishlist(wishlistCreateObj: WishlistCreate){
    return this._http.post(`${Api_Url}/Wishlist`, wishlistCreateObj, {headers: this.getHeaders() });
  }
}
