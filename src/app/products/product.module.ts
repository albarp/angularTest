import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { ProductEditComponent } from './edit/product-edit.component';
import { ProductShellComponent } from './product-shell/product-shell.component';
import { ProductShellListComponent } from './product-shell/product-shell-list.component';
import { ProductShellDetailComponent } from './product-shell/product-shell-detail.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductShellComponent,
    ProductShellListComponent,
    ProductShellDetailComponent
  ],
  imports: [
    RouterModule.forChild(
      [
        // {path: 'products', component: ProductListComponent},
        {path: 'products', component: ProductShellComponent},
        {path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard]},
        {
          path: 'products/:id/edit',
          component: ProductEditComponent
        }
      ]),
    SharedModule
  ]
})
export class ProductModule { }
