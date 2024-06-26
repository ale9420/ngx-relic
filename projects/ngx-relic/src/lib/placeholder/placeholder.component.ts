import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.scss',
})
export class PlaceholderComponent {
  @Input()
  disabled = false;
}
