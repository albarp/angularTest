import { Component } from '@angular/core';

@Component({
  selector: 'app-pm-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
      <app-pm-products></app-pm-products>
    </div>
  `
})
export class AppComponent {
  pageTitle = 'Default Value';
}
