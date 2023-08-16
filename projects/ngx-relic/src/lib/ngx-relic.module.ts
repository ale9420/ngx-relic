import { NgModule } from '@angular/core';
import { FormsModule } from './forms/forms.module';
import { DisplayModule } from './display/display.module';

@NgModule({
  declarations: [],
  imports: [FormsModule, DisplayModule],
  exports: [DisplayModule, FormsModule],
})
export class NgxRelicModule {}
