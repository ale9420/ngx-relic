import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { InputComponent } from './input.component';
import { BaseInputModule } from '../base-input';

@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    BaseInputModule,
  ],
  exports: [InputComponent],
})
export class InputModule {}
