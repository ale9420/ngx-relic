import { Component, Input, inject } from '@angular/core';
import { CvaDirective } from '../core/cva.directive';

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
  @Input()
  label = '';

  @Input()
  placeholder = '';

  @Input()
  errorText = '';

  @Input()
  helperText = '';

  @Input()
  required = false;

  @Input()
  disabled = false;

  @Input()
  type = '';

  _value: number | string = '';

  readonly _cvaDirective = inject<CvaDirective>(CvaDirective);

  onChange(value: string | number) {
    this._cvaDirective.onChange(value);
    this._cvaDirective.onTouched();
  }
}
