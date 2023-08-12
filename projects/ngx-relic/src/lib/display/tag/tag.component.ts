import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TagBackgroundColor, Color } from '../../types';

@Component({
  selector: 'lib-ngx-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
  @Input()
  color: Color = 'primary';

  @Input()
  close = false;

  @Input()
  outline = false;

  @Output()
  closeClick = new EventEmitter();

  TagBackgroundColor = TagBackgroundColor;

  get defaultClass() {
    return `ngx-tag--${this.color}`;
  }

  get outlineClass() {
    return `ngx-tag--outline-${this.color}`;
  }

  get baseClass() {
    return this.outline ? this.outlineClass : this.defaultClass;
  }

  onCloseClick() {
    this.closeClick.emit();
  }
}
