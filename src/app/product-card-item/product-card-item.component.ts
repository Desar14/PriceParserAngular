import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-product-card-item',
  templateUrl: './product-card-item.component.html',
  styleUrls: ['./product-card-item.component.scss']
})
export class ProductCardItemComponent implements OnInit {

  constructor() { }

  @Input() product?: Product;

  ngOnInit(): void {
  }

  onAddToWatch(product: Product): void {
    alert("Not implemented");
  }

}
