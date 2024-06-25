import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss'],
})
export class BaseInputComponent {
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
  hasErrors = false;
}
