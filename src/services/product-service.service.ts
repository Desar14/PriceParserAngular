import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { PRODUCTS } from './mock-product-service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getHero(id: string): Observable<Product>{
    // const product = PRODUCTS.find(h => h.id === id)!;
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      catchError(this.handleError<Product>('getHeroes', ))
    );
  }

  private productsUrl = 'https://localhost:8443/api/Product';
  private productDetailsUrl = 'https://localhost:8443/api/Product/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      catchError(this.handleError<Product[]>('getHeroes', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead



      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
