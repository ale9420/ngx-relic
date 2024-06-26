import { type Meta, type StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, forwardRef } from '@angular/core';
import { DatepickerComponent, DatepickerModule } from '../lib/datepicker';
import { BaseInputComponent, BaseInputModule } from '../lib/base-input';
import { HiddenDirective } from '../lib/core';

const datepicker: Meta<DatepickerModule> = {
  title: 'Forms/Datepicker',
  component: DatepickerComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    errorText: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [DatepickerComponent, HiddenDirective],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BaseInputModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => DatepickerComponent),
          multi: true,
        },
      ],
    }),
  ],
  render: (args) => {
    const { ...props } = args;

    return {
      props: {
        ...props,
        form: new FormBuilder().group({
          date: ['', [Validators.required]],
        }),
      },
      template: `
          <form style="height: 350px;" [formGroup]="form">
              <ngx-datepicker
                  formControlName="date"
                  [required]="required"
                  [label]="label"
                  [placeholder]="placeholder"
                  [errorText]="errorText"
                  [helperText]="helperText"
                  />
              <br />
              <br />
              {{input}}   
          </form>
              `,
    };
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

export default datepicker;
type Story = StoryObj<DatepickerComponent>;

export const Placeholder: Story = {
  args: {
    placeholder: 'Ingresa una fecha',
    label: 'Fecha de nacimiento',
    required: true,
    errorText: 'Required field',
  },
};
