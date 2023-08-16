import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.scss'],
})
export class SelectItemComponent {
  @Input()
  selected = false;

  @Input()
  multiple = false;
}
