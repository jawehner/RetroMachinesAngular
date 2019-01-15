import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Product } from '../models/Product';
import  { Api_Url } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  // take out /ai/ ??
  getProducts() {
    return this._http.get(`${Api_Url}/Product`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
  
  createProduct(product: Product) {
    return this._http.post(`${Api_Url}/Product`, product, { headers: this.getHeaders()});
  }

  // id string? or product id?
  getProduct(id: string) {
    return this._http.get(`${Api_Url}/Product/${id}`, {headers: this.getHeaders() });
  }

  updateProduct(product: Product) {
    return this._http.put(`${Api_Url}/Product/${product.productEntityId}`, product, { headers: this.getHeaders() });
  }

  deleteProduct(id: string) {
    return this._http.delete(`${Api_Url}/Product/${id}`, {headers: this.getHeaders() });
  }

 }
