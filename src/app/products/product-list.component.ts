import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'app-pm-products',
    templateUrl: './product-list-componet.html',
    styleUrls: ['./product-list-component.css']
})
export class ProductListComponent implements OnInit {


    pageTitle = 'Product List!';

    imageWidth: Number = 50;
    imageMargin: Number = 2;

    showImage = false;

    _listFilter: string;
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string) {

      this._listFilter = value;

      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];

    products: IProduct[] = [];

      constructor(private productService: ProductService) {
      }

      toggleImage(): void {
        this.showImage = !this.showImage;
      }

      performFilter(filterBy: string): IProduct[] {

        filterBy = filterBy.toLocaleLowerCase();

        return this.products.filter( (product: IProduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }

      onRatingClicked(message: string): void {
        this.pageTitle = message;
      }

      ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
      }
}
