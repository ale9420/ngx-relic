import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderComponent } from './placeholder/placeholder.component';

@NgModule({
  declarations: [PlaceholderComponent],
  imports: [CommonModule],
  exports: [PlaceholderComponent],
})
export class DisplayModule {}
