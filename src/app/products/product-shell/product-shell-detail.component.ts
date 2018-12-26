import { Component, OnInit } from '@angular/core';
import { Product2Service } from '../product2.service';
import { IProduct } from '../product';

@Component({
    selector: 'app-product-shell-detail',
    templateUrl: './product-shell-detail.component.html'
})
export class ProductShellDetailComponent implements OnInit {
    pageTitle: 'Product Detail';

    get product(): IProduct {
        return this.product2Service.currenProduct;
    }

    constructor(private product2Service: Product2Service) { }

    ngOnInit() {
    }

}
