import { Component, OnInit } from '@angular/core';

import { IProduct } from '../product';
import { Product2Service } from '../product2.service';

@Component({
  selector: 'app-product-shell-list',
  templateUrl: './product-shell-list.component.html'
})
export class ProductShellListComponent implements OnInit {
  pageTitle: 'Products';
  errorMessage: string;
  products: IProduct[];

  constructor(private product2Service: Product2Service) { }

  ngOnInit(): void {
    this.product2Service.getProducts().subscribe(
      (products: IProduct[]) => {
        this.products = products;
      },
      (error: any) => this.errorMessage = <any>error
    );
  }

}
