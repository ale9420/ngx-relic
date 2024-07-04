import { Component, Input, inject } from '@angular/core';
import { CvaDirective } from '../core/cva.directive';

/**
 * The `<ngx-input>` component is used to capture user data through an input field. It is a
 * versatile component that supports multiple data types, validations, and custom styles.
 */
@Component({
  selector: 'ngx-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  hostDirectives: [
    {
      directive: CvaDirective,
    },
  ],
})
export class InputComponent {
  /**
   * The label associated with the input field.
   */
  @Input()
  label = '';

  /**
   * The placeholder text displayed when the field is empty.
   */
  @Input()
  placeholder = '';

  /**
   * Text displayed in the bottom of the input component when the
   * input value does not comply with the expected validation
   */
  @Input()
  errorText = '';

  /**
   * Text displayed in the bottom of the input component as a helper for the user
   */
  @Input()
  helperText = '';

  /**
   * Indicates whether the input field is mandatory
   */
  @Input()
  required = false;

  /**
   * Indicates if the input field is disabled.
   */
  @Input()
  disabled = false;

  /**
   * The type of input field. Common values include **text**, **password**, **email**, **number**, **tel**, among others.
   */
  @Input()
  type = '';

  protected _value: number | string = '';

  protected readonly _cvaDirective = inject<CvaDirective>(CvaDirective);

  protected onChange(value: string | number) {
    this._cvaDirective.onChange(value);
    this._cvaDirective.onTouched();
  }
}
