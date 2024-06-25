import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvaDirective } from './cva.directive';
import { HiddenDirective } from './hidden.directive';

@NgModule({
  declarations: [CvaDirective, HiddenDirective],
  imports: [CommonModule],
  exports: [CvaDirective, HiddenDirective],
})
export class CoreModule {}
