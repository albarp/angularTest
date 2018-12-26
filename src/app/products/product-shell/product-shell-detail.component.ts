import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product';

@Component({
    selector: 'app-product-shell-detail',
    templateUrl: './product-shell-detail.component.html'
})
export class ProductShellDetailComponent implements OnInit {
    pageTitle: 'Product Detail';

    product: IProduct;

    constructor(private productService: ProductService) { }

    ngOnInit() {
    }

}
