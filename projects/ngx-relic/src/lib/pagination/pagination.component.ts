import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  @Input()
  currentPage = 1;

  @Input()
  limit = 10;

  @Input()
  total!: number;

  @Output()
  pageChange: EventEmitter<number> = new EventEmitter();

  numberPages: number[] = [];
  pageShow = 1;

  ngOnChanges() {
    const page = this.totalPages();

    this.numberPages = Array(page)
      .fill(0)
      .map((_, index) => index + 1);
  }

  changePage(page: number) {
    this.pageChange.emit(page);
  }

  totalPages() {
    return Math.ceil(this.total / this.limit);
  }
}
