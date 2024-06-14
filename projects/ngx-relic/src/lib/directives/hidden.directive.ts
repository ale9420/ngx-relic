import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHidden]',
})
export class HiddenDirective {
  @Input('appHidden') isHidden = false;

  @HostBinding('style.display')
  get displayStyle() {
    return this.isHidden ? 'none' : undefined;
  }
}
