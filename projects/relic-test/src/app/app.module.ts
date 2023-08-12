import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxRelicModule } from 'ngx-relic';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxRelicModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
