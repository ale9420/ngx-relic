import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {
  FormsModule as AngularFormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { DisplayModule } from '../display/display.module';
import { SelectItemComponent } from './select-item/select-item.component';
import { InputComponent } from './input/input.component';
import { BaseInputComponent } from './base-input/base-input.component';

@NgModule({
  declarations: [
    SelectComponent,
    SelectItemComponent,
    InputComponent,
    BaseInputComponent,
  ],
  imports: [
    CommonModule,
    AngularFormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    DisplayModule,
  ],
  exports: [
    SelectComponent,
    SelectItemComponent,
    InputComponent,
    BaseInputComponent,
  ],
})
export class FormsModule {}
