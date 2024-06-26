import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  ButtonModule,
  LabelModule,
  DatepickerModule,
  InputModule,
  SelectModule,
  TooltipModule,
  TagModule,
} from 'ngx-relic';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TooltipModule,
    LabelModule,
    DatepickerModule,
    InputModule,
    TagModule,
    SelectModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
