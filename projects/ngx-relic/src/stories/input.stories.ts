import { type Meta, type StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import {
  FormsModule,
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent, InputModule } from '../lib/input';
import { BaseInputModule } from '../lib/base-input';

const input: Meta<InputModule> = {
  title: 'Forms/Input',
  component: InputComponent,
  tags: ['autodocs'],
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
    disabled: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'number', 'phone'],
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [InputComponent],
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
          useExisting: forwardRef(() => InputComponent),
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
          email: ['', [Validators.required, Validators.email]],
        }),
      },
      template: `
        <form [formGroup]="form">
            <ngx-input
                formControlName="email"
                [required]="required"
                [label]="label"
                [placeholder]="placeholder"
                [type]="type"
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

export default input;
type Story = StoryObj<InputComponent>;

export const Placeholder: Story = {
  args: {
    placeholder: 'Ingresa un email',
    label: 'Email',
    required: true,
    disabled: false,
    errorText: 'Correo invalido',
    helperText: 'ingresa un correo existente',
  },
};
