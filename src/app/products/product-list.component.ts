import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { CriteriaComponent } from '../shared/criteria/criteria.component';

@Component({
    // selector: 'app-pm-products', non serve se lo raggiungiamo con il binding
    templateUrl: './product-list-componet.html',
    styleUrls: ['./product-list-component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {

    pageTitle = 'Product List!';
    showImage = false;
    includeDetail = true;

    imageWidth: Number = 50;
    imageMargin: Number = 2;
    errorMessage = '';

    // Comodo per essere avvisati ogni volta che il valore viene cambiato
    _listFilter: string;
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string) {

      this._listFilter = value;

      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];

    @ViewChild('filterRef') filterRef: ElementRef; // per recuperare la template reference variable
    // @ViewChild(NgModel) filterInput: NgModel; // diventa un event emitter

    @ViewChild(CriteriaComponent) filterComponent: CriteriaComponent;
    parentListFilter: string; // è quello che verrà letto dal figlio

    products: IProduct[] = [];

      constructor(private productService: ProductService) {
      }

      toggleImage(): void {
        this.showImage = !this.showImage;
      }

      performFilter(filterBy: string): IProduct[] {

        if (!filterBy) {
          return this.products;
        }

        filterBy = filterBy.toLocaleLowerCase();

        return this.products.filter( (product: IProduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }

      onRatingClicked(message: string): void {
        this.pageTitle = message;
      }

      onFilterChange(filter: string): void {
        // Se usiamo il two way binding long way
        // this.listFilter = filter; // Necessario, perchè non abbiamo più il two way binding a gratis
        this.performFilter(this.listFilter);
      }

      ngOnInit(): void {
        this.productService.getProducts().subscribe(products => {
          if (products) {
          this.products = products;
          this.filteredProducts = this.performFilter(this.parentListFilter);
          }
        },
        error => this.errorMessage = <any>error);
      }

      ngAfterViewInit(): void {

        this.parentListFilter = this.filterComponent.listFilter;

        // Tutto spostato nel componente CriteriaComponent
        // Se usiamo la templare reference variable
        // if (this.filterRef.nativeElement) { // Meglio controllare perchè, andando direttamente sul DOM, potrebbe essere che alcuni metodi manchino
        //   this.filterRef.nativeElement.focus();
        // }

        // this.filterInput.valueChanges.subscribe(
        //   () => this.performFilter(this.listFilter)
        // );
      }

      onFilterValueChanged(newFilter: string): void {
        if (newFilter) {
          this.filteredProducts = this.performFilter(newFilter);
        }
      }
}
