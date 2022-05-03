import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/models/product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from 'src/services/product-service.service';
import {Observable, Observer} from 'rxjs';
import { ProductDetailsTabs } from 'src/utils/product-details-tabs';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})


export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location) {
      this.asyncTabs = new Observable((observer: Observer<ProductDetailsTabs[]>) => {
        setTimeout(() => {
          observer.next([
            {label: 'Description', content: this.product?.description!},
            {label: 'Prices', content: 'Content 2'},
            {label: 'Reviews', content: 'Content 3'},
          ]);
        }, 1000);
      });
    }

  product?: Product;

  asyncTabs: Observable<ProductDetailsTabs[]>;



  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.productService.getHero(id)
      .subscribe(product => this.product = product);
  }
  goBack(): void {
    this.location.back();
  }

}
