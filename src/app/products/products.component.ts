import { PRODUCTS } from './../../services/mock-product-service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { ProductService } from 'src/services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}

  searchString = '';

  products : Product[] = [];

  // product : Product = {
  //   id: 'f3440ad6-0864-49ef-500d-08d9e8e5a916',
  //   name: 'AOC Gaming AG352UCG6',
  //   category: 'Monitor',
  //   description: 'top VA',
  //   hidden: false,
  //   bestPriceNow: 1234,
  //   bestPriceOverall: 1000,
  //   averagePriceNow: 1300,
  //   averagePriceOverall: 1110,
  //   currencyCode: 'BYN',
  //   averageScore: 0
  // }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  }

}
