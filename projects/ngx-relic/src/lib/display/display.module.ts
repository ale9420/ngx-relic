import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag/tag.component';
import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    TagComponent,
    ButtonComponent,
    LabelComponent,
    TooltipComponent,
  ],
  imports: [CommonModule],
  exports: [TagComponent, ButtonComponent, LabelComponent, TooltipComponent],
})
export class DisplayModule {}
