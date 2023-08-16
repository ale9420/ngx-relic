import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule as AngularFormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { DisplayModule } from '../display/display.module';
import { SelectItemComponent } from './select-item/select-item.component';

@NgModule({
  declarations: [SelectComponent, SelectItemComponent],
  imports: [
    CommonModule,
    AngularFormsModule,
    ReactiveFormsModule,
    DisplayModule,
  ],
  exports: [SelectComponent, SelectItemComponent],
})
export class FormsModule {}
