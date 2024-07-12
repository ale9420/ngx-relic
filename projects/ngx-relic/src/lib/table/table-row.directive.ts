import { Directive, Input, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: 'ng-template[appTableRow]',
})
export class TableRowDirective {
  @Input() appTableRow = '';

  element = inject(TemplateRef);
}
