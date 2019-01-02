import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { ReactiveStateComponent } from './state/reactive-state/reactive-state-container.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'reactiveState', component: ReactiveStateComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
