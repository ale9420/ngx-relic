import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableRowDirective } from './table-row.directive';
import { inject, TemplateRef } from '@angular/core';

describe('TableRowDirective', () => {
  let component: TableRowDirective;
  let fixture: ComponentFixture<TableRowDirective>;
  let injects: TableRowDirective;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableRowDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(TableRowDirective);

    injects = fixture.debugElement.injector.get(inject);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(injects).toBeTruthy();
  });
});
