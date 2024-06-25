import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseInputComponent } from './base-input.component';
import { LabelModule } from '../label';

@NgModule({
  declarations: [BaseInputComponent],
  imports: [CommonModule, LabelModule],
  exports: [BaseInputComponent],
})
export class BaseInputModule {}
