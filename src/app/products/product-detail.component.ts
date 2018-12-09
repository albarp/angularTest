import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  // selector: 'app-product-detail', Non serve perchè non lo richiamiamo nell'html, ma ci navighiamo con il routing
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product detail';
  product: IProduct;
  constructor() { }

  ngOnInit() {
  }

}
