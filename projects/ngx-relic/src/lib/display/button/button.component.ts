import { Component, Input } from '@angular/core';
import { Color } from '../../types';

@Component({
  selector: 'ngx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  icon: string | null = null;

  @Input()
  state: Color = 'primary';

  @Input()
  outline = false;
}
