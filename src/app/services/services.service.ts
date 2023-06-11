import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddProductResponse } from '../models/add.product.response.model';
import { product } from '../models/product.model';
import { Observable } from 'rxjs';
import { ProductResponse } from '../models/product.response.model';
 
@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  private baseUrl = 'https://smart-grocery.onrender.com/';
  constructor(private http: HttpClient) { }

  httpOptions = { headers: new HttpHeaders({'content-type':'application/json'}), };

  addProduct(product: product): Observable<AddProductResponse> {
    return this.http.post<AddProductResponse>(
      this.baseUrl + 'api/products',
      product,this.httpOptions
    );
  }

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.baseUrl + 'api/products');
  }

  updateProduct(product: product): Observable<any> {
    return this.http.put(this.baseUrl + 'api/products', product);
  }
  
}
