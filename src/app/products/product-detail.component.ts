import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IProduct } from './product';
import { Product2Service } from './product2.service';

@Component({
    // selector: // non serve perchè ci arriviamo con il routing
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    pageTitle: 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private product2Service: Product2Service,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const param = this.route.snapshot.paramMap.get('id');
        if (param) {
            const id = +param; // trasforma una stringa in un intero
            this.getProduct(id);
        }
    }

    getProduct(id: number) {
        this.product2Service.getProduct(id).subscribe(
          product => this.product = product,
          error => this.errorMessage = <any>error
        );
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }
}
