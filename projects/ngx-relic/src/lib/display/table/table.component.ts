import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'lib-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent<TItem extends object> {
  @ContentChildren(TableRowDirective)
  tableRows?: QueryList<TableRowDirective>;

  @Input()
  options!: TableOptions;

  @Input()
  data: TItem[] = [];

  @Input()
  pageActual: number;

  @Input()
  limit = 10;

  @Input()
  total = 0;

  @Output()
  pageChange: EventEmitter<number> = new EventEmitter();

  changePage(page: number) {
    this.pageChange.emit(page);
  }

  defaultColumnWidth = '225px';
  defaultTdAlign = 'center';
}
