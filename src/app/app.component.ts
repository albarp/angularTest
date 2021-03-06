import { Component } from '@angular/core';

@Component({
  selector: 'app-pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
        <li><a class='nav-link' routerLink='/products'>Product List</a></li>
        <li routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
                <a [routerLink]="['/products', 0, 'edit']">Add Product</a>
        </li>
        <li><a class='nav-link' [routerLink]="['/reactiveState']">State</a></li>
      </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  pageTitle = 'Default Value';
}
