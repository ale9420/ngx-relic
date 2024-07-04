import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color, TagSize } from '../types';

/**
 * @component
 *  The `<ngx-tag>` component is used to display a tag that can contain text, an icon, or both. It is ideal for highlighting information,
 * categorizing elements, or displaying status. This component is highly configurable and allows customizations in style, size and behavior.
 */
@Component({
  selector: 'ngx-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
  /**
   * name of the icon
   * @see {@link https://marella.me/material-icons/demo/} Icon list
   */
  @Input()
  icon = '';

  /**
   * State color to be applied
   */
  @Input()
  state: Color = 'primary';

  /**
   * Size of the tag
   */
  @Input()
  size: TagSize = 'medium';

  /**
   * Enable close feature
   */
  @Input()
  close = false;

  /**
   * Apply outline style
   */
  @Input()
  outline = false;

  /**
   * Called event when close button is clicked
   */
  @Output()
  onClose = new EventEmitter();

  get defaultClass() {
    return `ngx-tag--${this.state}-${this.size}`;
  }

  get outlineClass() {
    return `ngx-tag--outline-${this.state}-${this.size}`;
  }

  get baseClass() {
    return this.outline ? this.outlineClass : this.defaultClass;
  }

  protected onCloseClick() {
    this.onClose.emit();
  }
}
