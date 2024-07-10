import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent, InputModule } from './index';
import { BaseInputModule } from '../base-input';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { Component } from '@angular/core';

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-input
        label="First name"
        placeholder="Type a name"
        type="text"
        formControlName="input"
      />
    </form>
  `,
  imports: [FormsModule, ReactiveFormsModule, InputModule],
})
class InputFormControlComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      input: fb.control(''),
    });
  }
}

describe('InputComponent', () => {
  let component: InputFormControlComponent;
  let fixture: ComponentFixture<InputFormControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [BaseInputModule, FormsModule, ReactiveFormsModule, CoreModule],
    });
    fixture = TestBed.createComponent(InputFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
