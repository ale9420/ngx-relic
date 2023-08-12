import { NgModule } from '@angular/core';
import { NgxRelicComponent } from './ngx-relic.component';
import { FormsModule } from './forms/forms.module';
import { DisplayModule } from './display/display.module';

@NgModule({
  declarations: [NgxRelicComponent],
  imports: [FormsModule, DisplayModule],
  exports: [NgxRelicComponent, DisplayModule],
})
export class NgxRelicModule {}
