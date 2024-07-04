import { Component, Input } from '@angular/core';
import { ButtonColor } from '../types';

/**
 * @component
 * The `<ngx-button>` component is a wrapper for `<button>` element
 */
@Component({
  selector: 'ngx-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  /**
   * name of the icon
   * @see {@link https://marella.me/material-icons/demo/} Icon list
   */
  @Input()
  icon: string | null = null;

  @Input()
  color: ButtonColor = 'primary';

  /**
   * Apply outline variation
   */
  @Input()
  outline = false;

  /**
   * Disable button functionality
   */
  @Input()
  disabled = false;

  /**
   * Apply plain variation
   */
  @Input()
  plain = false;

  /**
   * Base class applied to the button component
   * @return scss class applied to the button
   */
  protected get baseClass() {
    if (this.outline) return `ngx-button--outline-${this.color}`;
    if (this.plain) return `ngx-button--plain-${this.color}`;

    return `ngx-button--default-${this.color}`;
  }
}
