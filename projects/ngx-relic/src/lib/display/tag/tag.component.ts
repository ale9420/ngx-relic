import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color } from '../../types';

@Component({
  selector: 'ngx-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
  @Input()
  state: Color = 'primary';

  @Input()
  close = false;

  @Input()
  outline = false;

  @Output()
  closeClick = new EventEmitter();

  get defaultClass() {
    return `ngx-tag--${this.state}`;
  }

  get outlineClass() {
    return `ngx-tag--outline-${this.state}`;
  }

  get baseClass() {
    return this.outline ? this.outlineClass : this.defaultClass;
  }

  onCloseClick() {
    this.closeClick.emit();
  }
}
