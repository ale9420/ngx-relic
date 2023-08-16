import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag/tag.component';
import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';

@NgModule({
  declarations: [TagComponent, ButtonComponent, LabelComponent],
  imports: [CommonModule],
  exports: [TagComponent, ButtonComponent, LabelComponent],
})
export class DisplayModule {}
