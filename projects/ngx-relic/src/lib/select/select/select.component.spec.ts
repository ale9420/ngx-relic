import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SelectComponent } from './select.component';
import { PlaceholderModule } from '../../placeholder';
import { BaseInputModule } from '../../base-input';
import { ButtonModule } from '../../button';
import { TagModule } from '../../tag';
import { Component, forwardRef } from '@angular/core';
import { SelectModule } from '../select.module';

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-select
        label="Permissions"
        placeholder="Select one or more options"
        labelKey="name"
        valueKey="id"
        [multiple]="true"
        [options]="options"
        formControlName="select"
      />
    </form>
  `,
  imports: [FormsModule, ReactiveFormsModule, SelectModule],
})
class SelectFormControlComponent {
  form: FormGroup;

  options = [
    {
      id: 1,
      name: 'Admin',
    },
    {
      id: 2,
      name: 'Guest',
    },
    {
      id: 3,
      name: 'Management desk',
    },
  ];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      select: fb.control(''),
    });
  }
}

describe('SelectComponent', () => {
  let component: SelectFormControlComponent;
  let fixture: ComponentFixture<SelectFormControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectComponent],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => SelectComponent),
          multi: true,
        },
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        ScrollingModule,
        PlaceholderModule,
        BaseInputModule,
        ButtonModule,
        TagModule,
      ],
    });
    fixture = TestBed.createComponent(SelectFormControlComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
