import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from './../product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://api.escuelajs.co/api/v1/products';

  constructor(
    private http: HttpClient
  ) {}

  getAllProduct() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

}

