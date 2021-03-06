// Questo servizio, a differenza di ProductService standard, utilizza l'InMemoryDataService.
// In questo modo si possono simulare anche le chiamate in Post (ProductService può solo ritornare un file
// JSon GET)
// In più questo fa anche cache

import { Injectable } from '@angular/core';
import { IProduct } from './product';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Product2Service {
    private productsUrl = 'api/products';

    private products: IProduct[];

    currenProduct: IProduct | null;

    constructor(private http: HttpClient) { }

    getProducts(): Observable<IProduct[]> {

        if (this.products) {
            return of(this.products);
        }

        return this.http.get<IProduct[]>(this.productsUrl).pipe(
          tap(data => console.log('Data: ' + JSON.stringify(data))),
          tap(data => this.products = data), // aggiorno la cache locale
          catchError(this.handleError)
        );
    }

    getProduct(id: number): Observable<IProduct> {
        if (id === 0) {
            return of(this.initializeProduct());
        }

        if (this.products) {
            const foundItem = this.products.find(item => item.id === id);
            if (foundItem) {
                return of(foundItem);
            }
        }

        const url = `${this.productsUrl}/${id}`;
        return this.http.get<IProduct>(url)
                        .pipe(
                            tap(data => console.log('Data: ' + JSON.stringify(data))),
                            catchError(this.handleError)
                        );
    }

    saveProduct(product: IProduct): Observable<IProduct> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        if (product.id === 0) {
            return this.createProduct(product, headers);
        }
        return this.updateProduct(product, headers);
    }

    deleteProduct(id: number): Observable<IProduct> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        const url = `${this.productsUrl}/${id}`;
        return this.http.delete<IProduct>(url, { headers: headers} )
                        .pipe(
                            tap(data => console.log('deleteProduct: ' + id)),
                            tap(data => {
                                const foundIndex = this.products.findIndex(item => item.id === id);
                                if (foundIndex > -1) {
                                    this.products.splice(foundIndex, 1);
                                }
                                this.currenProduct = null;
                            }),
                            catchError(this.handleError)
                        );
    }

    private createProduct(product: IProduct, headers: HttpHeaders): Observable<IProduct> {
        product.id = null; // used by InMemoryDataService to create a new ID
        return this.http.post<IProduct>(this.productsUrl, product,  { headers: headers} )
                        .pipe(
                            tap(data => console.log('createProduct: ' + JSON.stringify(data))),
                            tap(data => {
                                this.products.push(data);
                                this.currenProduct = data;
                            }), // Update local cache
                            catchError(this.handleError)
                        );
    }

    private updateProduct(product: IProduct, headers: HttpHeaders): Observable<IProduct> {
        const url = `${this.productsUrl}/${product.id}`;
        return this.http.put<IProduct>(url, product, { headers: headers} )
                        .pipe(
                            tap(data => console.log('updateProduct: ' + product.id)),
                            catchError(this.handleError)
                        );
    }

    private initializeProduct(): IProduct {
        // Return an initialized object
        return {
            id: 0,
            productName: '',
            productCode: '',
            category: '',
            tags: [],
            releaseDate: '',
            price: 0,
            description: '',
            starRating: 0,
            imageUrl: ''
        };
    }

    private handleError(err: HttpErrorResponse) {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }

}
