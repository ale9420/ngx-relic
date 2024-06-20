import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag/tag.component';
import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

@NgModule({
  declarations: [
    TagComponent,
    ButtonComponent,
    LabelComponent,
    TooltipComponent,
    PlaceholderComponent,
  ],
  imports: [CommonModule],
  exports: [
    TagComponent,
    ButtonComponent,
    LabelComponent,
    TooltipComponent,
    PlaceholderComponent,
  ],
})
export class DisplayModule {}
