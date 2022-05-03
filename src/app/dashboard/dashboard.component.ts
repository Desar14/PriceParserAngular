import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product-service.service';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products : Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => this.products = products.filter(x=> x.averagePriceNow > 100));;
  }

}
