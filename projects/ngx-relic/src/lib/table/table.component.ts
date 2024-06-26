import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { TableRowDirective } from './table-row.directive';
import { TableOptions } from '../types';

@Component({
  selector: 'ngx-table',
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
  currentPage = 1;

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

  get headers() {
    return Object.keys(this.options.columns);
  }

  findRow(columnName: string) {
    const column = this.tableRows?.find((i) => i.appTableRow === columnName);
    if (column) return column.element;
    return null;
  }

  headerStyles(columnName: string) {
    return {
      minWidth:
        this.options?.columns && this.options?.columns[columnName]
          ? this.options?.columns[columnName]?.width
          : this.defaultColumnWidth,
      textAlign:
        this.options?.columns && this.options?.columns[columnName]
          ? this.options?.columns[columnName].align
          : this.defaultTdAlign,
    };
  }

  rowStyles(columnName: string) {
    return {
      textAlign:
        this.options?.body && this.options?.body[columnName]
          ? this.options?.body[columnName]?.align
          : this.defaultTdAlign,
    };
  }
}
