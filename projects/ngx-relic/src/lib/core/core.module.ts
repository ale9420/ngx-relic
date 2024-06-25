import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvaDirective } from './cva.directive';

@NgModule({
  declarations: [CvaDirective],
  imports: [CommonModule],
  exports: [CvaDirective],
})
export class CoreModule {}
