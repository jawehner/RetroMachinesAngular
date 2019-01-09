// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';


// const ApiUrl = 'https://localhost:44311/api'

// @Injectable({
//   providedIn: 'root'
// })
// export class WishlistsService {

//   constructor(private _http: HttpClient) { }

//   getWishlists() {
//     return this._http.get(`${ApiUrl}/Wishlists`, {headers: this.getHeaders()})
//   }
  
//   private getHeaders() {
//     return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
//   }

//   createWishlist(wishlist: Wishlist) {
//     return this._http.post(`${ApiUrl}/Wishlists`, wishlist, { headers: this.getHeaders()})
//   }
// }
