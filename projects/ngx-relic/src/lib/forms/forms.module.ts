import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule as AngularFormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { DisplayModule } from '../display/display.module';

@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    AngularFormsModule,
    ReactiveFormsModule,
    DisplayModule,
  ],
  exports: [SelectComponent],
})
export class FormsModule {}
