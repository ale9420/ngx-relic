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
import { ScrollingModule } from '@angular/cdk/scrolling';
import {
  SelectComponent,
  SelectItemComponent,
  SelectModule,
} from '../lib/select';
import { BaseInputModule } from '../lib/base-input';
import { ButtonModule } from '../lib/button';
import { PlaceholderModule } from '../lib/placeholder';
import { TagModule } from '../lib/tag';

const input: Meta<SelectModule> = {
  title: 'Forms/Select',
  component: SelectComponent,
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
      declarations: [SelectComponent, SelectItemComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ScrollingModule,
        BaseInputModule,
        ButtonModule,
        PlaceholderModule,
        TagModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => SelectComponent),
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
        permissions: [
          {
            id: 1,
            name: 'Admin',
          },
          {
            id: 2,
            name: 'Comercial',
          },
          {
            id: 3,
            name: 'Mesa de gestion',
          },
        ],
        form: new FormBuilder().group({
          select: ['', [Validators.required]],
        }),
      },
      template: `
        <form [formGroup]="form">
            <ngx-select
            [options]="permissions"
            [closeOnSelect]="false"
            formControlName="select"
                [required]="required"
                [label]="label"
                [placeholder]="placeholder"
                [type]="type"
                [errorText]="errorText"
                [helperText]="helperText"
                labelKey="name"
      valueKey="id"
                />
            <br />
            <br />
            {{input}}   
        </form>
            `,
    };
  },
};

export default input;
type Story = StoryObj<SelectComponent<any, any>>;

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
