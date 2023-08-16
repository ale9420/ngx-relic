import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag/tag.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [TagComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [TagComponent, ButtonComponent],
})
export class DisplayModule {}
