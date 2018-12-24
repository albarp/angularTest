import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';
import { ConvertoToSpacesPipe } from './convert-to-spaces.pipe';
import { CriteriaComponent } from './criteria/criteria.component';

@NgModule({
  declarations: [
    StarComponent,
    ConvertoToSpacesPipe,
    CriteriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StarComponent,
    ConvertoToSpacesPipe,
    CriteriaComponent,
    CommonModule,
    FormsModule,
  ]
})
export class SharedModule { }
