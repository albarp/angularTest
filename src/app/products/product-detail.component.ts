import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // selector: 'app-product-detail', Non serve perchè non lo richiamiamo nell'html, ma ci navighiamo con il routing
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product detail';
  product: IProduct;
  constructor(
    private acticatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = +this.acticatedRoute.snapshot.paramMap.get('id'); // traforma il valore ritornato da get in un numero
    this.pageTitle = `${id}`;
    this.product = {
      'productId': 1,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19, 2016',
      'description': 'Leaf rake with 48-inch wooden handle.',
      'price': 19.95,
      'starRating': 3.2,
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
