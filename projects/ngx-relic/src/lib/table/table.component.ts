import {
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { TableRowDirective } from './table-row.directive';
import { TableOptions } from '../types';

/**
 *
 * @component
 * The `<ngx-table>` component render data through the **Data Input**, it is necessary to use the **options Input**
 * to configure the columns to be displayed and editable visual changes for each one (title, width, align). Also, the **body property**
 * allows editable alignment for each cell of a column
 */
@Component({
  selector: 'ngx-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent<TItem extends object> implements OnInit {
  /**
   * Custom table rows to render
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
   * Enable pagination for the table
   */
  @Input()
  paginator = true;

  /**
   * Limit of items displayed per page
   */
  @Input()
  limit = 10;

  /**
   * Total number of data items
   */
  protected total = 0;

  /**
   * Current paginated data to render
   */
  protected paginatedData: TItem[] = [];

  protected DEFAULT_COLUMN_WIDTH = '225px';
  protected DEFAULT_TD_ALIGN = 'center';

  get headers() {
    return Object.keys(this.options.columns);
  }

  /**
   * @private
   * @ignore
   */
  ngOnInit(): void {
    this.paginatedData = this.paginator
      ? this.data.slice(0, this.limit)
      : this.data;
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

  findRow(columnName: string) {
    const column = this.tableRows?.find((i) => i.appTableRow === columnName);
    if (column) return column.element;
    return null;
  }

  /**
   * Apply header styles for one column
   * @param columnName property of the columns object contained in the options input
   * @returns minWidth and textAlign css properties
   */
  protected headerStyles(columnName: string) {
    return {
      minWidth:
        this.options?.columns && this.options?.columns[columnName]
          ? this.options?.columns[columnName]?.width
          : this.DEFAULT_COLUMN_WIDTH,
      textAlign:
        this.options?.columns && this.options?.columns[columnName]
          ? this.options?.columns[columnName].align
          : this.DEFAULT_TD_ALIGN,
    };
  }

  /**
   * Apply styles for a cell of the table
   * @param columnName property of the columns object contained in the options input
   * @returns textAlign css property
   */
  protected cellStyles(columnName: string) {
    return {
      textAlign:
        this.options?.body && this.options?.body[columnName]
          ? this.options?.body[columnName]?.align
          : this.DEFAULT_TD_ALIGN,
    };
  }
}
