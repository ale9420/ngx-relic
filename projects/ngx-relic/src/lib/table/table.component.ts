import {
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';
import { TableRowDirective } from './table-row.directive';
import { TableOptions } from '../types';

/**
 *
 * @component
 * This is the table component
 * @link ../import-module.mdx
 */
@Component({
  selector: 'ngx-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent<TItem extends object> implements OnInit {
  /**
   * Row list
   * @example
   * ```html
   * <ng-template appTableRow="created_at" let-row>
   *   {{ row.created_at | date }}
   * </ng-template>
   * ```
   */
  @ContentChildren(TableRowDirective)
  tableRows?: QueryList<TableRowDirective>;

  /**
   * Options object to allow you to configure header and body properties
   */
  @Input()
  options!: TableOptions;

  /**
   * Array of objects to display in the table
   */
  @Input()
  data: TItem[] = [];

  /**
   * Current paginated page from the table
   */
  @Input()
  currentPage = 1;

  /**
   * Limit of items displayed per page
   */
  @Input()
  limit = 10;

  @Output()
  pageChange: EventEmitter<number> = new EventEmitter();

  protected defaultColumnWidth = '225px';
  protected defaultTdAlign = 'center';

  /**
   * Total number of data items
   */
  protected total = 0;
  protected paginatedData: TItem[] = [];

  get headers() {
    return Object.keys(this.options.columns);
  }

  /**
   * @private
   * @ignore
   */
  ngOnInit(): void {
    this.paginatedData = this.data.slice(0, this.limit);
    this.total = this.data.length;
  }

  /**
   * Change the current paginated page
   * @param page
   */
  protected changePage(page: number) {
    this.currentPage = page;
    const initialIndex = this.limit * this.currentPage;
    const finalIndex = initialIndex + this.limit;
    this.paginatedData = this.data.slice(initialIndex, finalIndex);
  }

  protected findRow(columnName: string) {
    const column = this.tableRows?.find((i) => i.appTableRow === columnName);
    if (column) return column.element;
    return null;
  }

  protected headerStyles(columnName: string) {
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

  protected rowStyles(columnName: string) {
    return {
      textAlign:
        this.options?.body && this.options?.body[columnName]
          ? this.options?.body[columnName]?.align
          : this.defaultTdAlign,
    };
  }
}
