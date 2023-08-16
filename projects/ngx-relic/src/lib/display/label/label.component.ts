import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent {
  @Input()
  required = false;

  @Input()
  disabled = false;
}
