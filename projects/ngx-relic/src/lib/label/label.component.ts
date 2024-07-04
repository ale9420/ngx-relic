import { Component, Input } from '@angular/core';

/**
 * @component
 * This component is used as part of any forms component to display the label of the form control
 */
@Component({
  selector: 'ngx-label',
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss',
})
export class LabelComponent {
  /**
   * Shows that the form control component is required
   */
  @Input()
  required = false;

  /**
   * Disabled state to change styles
   */
  @Input()
  disabled = false;
}
