import { TableRowDirective } from './table-row.directive';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('TableRowDirective', () => {
  it('should create an instance', () => {
    TestBed.configureTestingModule({
      declarations: [TableRowDirective],
      schemas: [NO_ERRORS_SCHEMA],
    });

    TestBed.runInInjectionContext(async () => {
      const directive = new TableRowDirective();
      expect(directive).toBeTruthy();
    });
  });
});
