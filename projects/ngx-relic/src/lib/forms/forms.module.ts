import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule as AngularFormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [CommonModule, AngularFormsModule, ReactiveFormsModule],
})
export class FormsModule {}
