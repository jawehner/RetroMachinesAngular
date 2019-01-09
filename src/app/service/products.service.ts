import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Product } from '../models/Product';

const ApiUrl = 'https://localhost:44311';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get(`${ApiUrl}/api/Products`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
  
  createProduct(product: Product) {
    return this._http.post(`${ApiUrl}/Products`, product, { headers: this.getHeaders()});
  }

  // getProduct(id: string) {
  //   return this._http.get(`${ApiUrl}/Products/${id}`, {headers: this.getHeaders() });
  // }
}
