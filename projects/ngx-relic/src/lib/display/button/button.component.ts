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

  get baseClass() {
    return this.outline
      ? `ngx-button--outline-${this.color}`
      : `ngx-button--default-${this.color}`;
  }
}
