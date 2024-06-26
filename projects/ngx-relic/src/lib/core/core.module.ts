import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiddenDirective } from './hidden.directive';

@NgModule({
  declarations: [HiddenDirective],
  imports: [CommonModule],
  exports: [HiddenDirective],
})
export class CoreModule {}
