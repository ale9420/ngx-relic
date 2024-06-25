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
import { HiddenDirective } from '../directives/hidden.directive';

@NgModule({
  declarations: [
    SelectComponent,
    SelectItemComponent,
    InputComponent,
    HiddenDirective,
  ],
  imports: [
    CommonModule,
    AngularFormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    DisplayModule,
  ],
  exports: [SelectComponent, SelectItemComponent, InputComponent],
})
export class FormsModule {}
