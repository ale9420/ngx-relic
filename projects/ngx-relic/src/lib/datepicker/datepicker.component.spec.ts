import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerComponent } from './datepicker.component';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { DatepickerModule } from './datepicker.module';
import { CoreModule } from '../core/core.module';
import { BaseInputModule } from '../base-input';
import { PlaceholderModule } from '../placeholder';
import { ButtonModule } from '../button';

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-datepicker
        label="Birth date"
        placeholder="Enter a date"
        formControlName="date"
      />
    </form>
  `,
  imports: [FormsModule, ReactiveFormsModule, DatepickerModule],
})
class DateFormControlComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      date: fb.control(''),
    });
  }
}

describe('DatepickerComponent', () => {
  let component: DateFormControlComponent;
  let fixture: ComponentFixture<DateFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatepickerComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        CoreModule,
        BaseInputModule,
        PlaceholderModule,
        ButtonModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DateFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
