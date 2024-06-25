import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag/tag.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

@NgModule({
  declarations: [TagComponent, TooltipComponent, PlaceholderComponent],
  imports: [CommonModule],
  exports: [TagComponent, TooltipComponent, PlaceholderComponent],
})
export class DisplayModule {}
