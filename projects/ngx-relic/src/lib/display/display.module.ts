import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag/tag.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

@NgModule({
  declarations: [TagComponent, PlaceholderComponent],
  imports: [CommonModule],
  exports: [TagComponent, PlaceholderComponent],
})
export class DisplayModule {}
