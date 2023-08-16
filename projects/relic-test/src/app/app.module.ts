import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxRelicModule } from 'ngx-relic';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxRelicModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
