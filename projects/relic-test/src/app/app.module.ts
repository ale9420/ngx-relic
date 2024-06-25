import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  NgxRelicModule,
  ButtonModule,
  LabelModule,
  DatepickerModule,
  InputModule,
  SelectModule,
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
    InputModule,
    SelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
