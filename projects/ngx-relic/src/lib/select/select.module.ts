import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { SelectItemComponent } from './select-item/select-item.component';

@NgModule({
  declarations: [SelectComponent, SelectItemComponent],
  imports: [CommonModule, ScrollingModule, FormsModule, ReactiveFormsModule],
  exports: [SelectComponent, SelectItemComponent],
})
export class SelectModule {}
