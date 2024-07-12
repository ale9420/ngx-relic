import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { PaginationModule } from '../pagination';
import { TableRowDirective } from './table-row.directive';
import { generateRandomData, TABLE_OPTIONS } from './testing/helpers';

describe('TableComponent', () => {
  let component: TableComponent<any>;
  let fixture: ComponentFixture<TableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent, TableRowDirective],
      imports: [PaginationModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.data = generateRandomData(20);
    component.limit = 5;
    component.options = TABLE_OPTIONS;
    fixture.detectChanges();
  });

  it('should change current page', () => {
    const initialPage = fixture.nativeElement.querySelector(
      'ngx-button[ng-reflect-plain="false"]',
    );
    expect(initialPage.children[0].children[0].innerHTML).toEqual('1');

    fixture.nativeElement
      .querySelector('ngx-button[icon="chevron_right"]')
      .dispatchEvent(new Event('click'));
    fixture.detectChanges();

    const currentPage = fixture.nativeElement.querySelector(
      'ngx-button[ng-reflect-plain="false"]',
    );
    expect(currentPage.children[0].children[0].innerHTML).toEqual('2');
  });
});
