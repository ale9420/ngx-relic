import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  NgxRelicModule,
  ButtonModule,
  LabelModule,
  DatepickerModule,
} from 'ngx-relic';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxRelicModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    LabelModule,
    DatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
