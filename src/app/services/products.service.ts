import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Product } from '../models/Product';
import  { Api_Url } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get(`${Api_Url}/api/Products`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
  
  createProduct(product: Product) {
    return this._http.post(`${Api_Url}/Products`, product, { headers: this.getHeaders()});
  }

  getProduct(id: string) {
    return this._http.get(`${ApiUrl}/Products/${id}`, {headers: this.getHeaders() });
  }

  updateProduct(product: Product) {
    return this._http.put(`${ApiUrl}/Products`, product, { headers: this.getHeaders() });
  }

  deleteProduct(id: string) {
    return this._http.delete(`${ApiUrl}/Products/${id}`, {headers: this.getHeaders() });
  }

 }
