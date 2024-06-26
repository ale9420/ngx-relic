import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @Input()
  width: number | string;

  @Input()
  position: 'top' | 'left' | 'right' | 'bottom';

  showTooltip = true;

  constructor() {
    this.width = '125px';
    this.position = 'bottom';
  }

  get contentWidth() {
    return typeof this.width === 'number' ? `${this.width}px` : this.width;
  }

  get positionClass() {
    return `ngx-tooltip__content--${this.position}`;
  }
}
