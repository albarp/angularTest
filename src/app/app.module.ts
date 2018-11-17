import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import{FormsModule} from '@angular/forms';
import { ConvertoToSpacesPipe } from './shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertoToSpacesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
