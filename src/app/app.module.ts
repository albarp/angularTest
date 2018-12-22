import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule, // Questo deve venire prima perchè, a sua volta, registra delle regole di routing che vanno
    AppRoutingModule // valutate prima di quelle specificate in AppRoutingModule (che è quello globale)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
