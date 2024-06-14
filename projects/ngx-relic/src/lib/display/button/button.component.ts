import { Component, Input } from '@angular/core';
import { ButtonColor } from '../../types';

@Component({
  selector: 'ngx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  icon: string | null = null;

  @Input()
  color: ButtonColor = 'primary';

  @Input()
  outline = false;

  @Input()
  disabled = false;

  @Input()
  plain = false;

  get baseClass() {
    if (this.outline) return `ngx-button--outline-${this.color}`;
    if (this.plain) return `ngx-button--plain-${this.color}`;

    return `ngx-button--default-${this.color}`;
  }
}
