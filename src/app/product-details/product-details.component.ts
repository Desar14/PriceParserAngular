import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  @Input() product?: Product;

  // product? : Product = {
  //   id: '',
  //   name: '',
  //   category: '',
  //   description: '',
  //   hidden: false,
  //   bestPriceNow: 0,
  //   bestPriceOverall: 0,
  //   averagePriceNow: 0,
  //   averagePriceOverall: 0,
  //   currencyCode: '',
  //   averageScore: 0
  // }
  ngOnInit(): void {
  }

}
