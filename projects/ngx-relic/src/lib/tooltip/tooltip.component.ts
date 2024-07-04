import { Component, Input } from '@angular/core';

/**
 * @component
 * The `<ngx-tooltip>` component is used to display additional information when the user hovers over or selects an element.
 * It is a useful tool to provide contextual details without cluttering the user interface.
 */
@Component({
  selector: 'ngx-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  /**
   * Width of the tooltip
   */
  @Input()
  width: number | string = '125px';

  /**
   * Position to be displayed
   */
  @Input()
  position: 'top' | 'left' | 'right' | 'bottom' = 'bottom';

  protected showTooltip = false;

  get contentWidth() {
    return typeof this.width === 'number' ? `${this.width}px` : this.width;
  }

  get positionClass() {
    return `ngx-tooltip__content--${this.position}`;
  }
}
