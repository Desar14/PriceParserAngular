import { Injectable } from '@angular/core';
import { Product } from 'src/models/product';
import { PRODUCTS } from './mock-product-service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }
}
