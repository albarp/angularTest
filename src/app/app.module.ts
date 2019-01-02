import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';
import { ReactiveStatedestinationComponent } from './state/reactive-state/reactive-state-destination.component';
import { ReactiveStateComponent } from './state/reactive-state/reactive-state-container.component';
import { ReactiveStateSourceComponent } from './state/reactive-state/reactive-state-source.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ReactiveStateComponent,
    ReactiveStateSourceComponent,
    ReactiveStatedestinationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
    ProductModule, // Questo deve venire prima perchè, a sua volta, registra delle regole di routing che vanno
    AppRoutingModule // valutate prima di quelle specificate in AppRoutingModule (che è quello globale)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
