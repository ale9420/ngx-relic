import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { DatepickerComponent } from './datepicker.component';
import { BaseInputModule } from '../base-input';
import { PlaceholderModule } from '../placeholder';
import { ButtonModule } from '../button';

@NgModule({
  declarations: [DatepickerComponent],
  imports: [
    CommonModule,
    CoreModule,
    BaseInputModule,
    PlaceholderModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [DatepickerComponent],
})
export class DatepickerModule {}
