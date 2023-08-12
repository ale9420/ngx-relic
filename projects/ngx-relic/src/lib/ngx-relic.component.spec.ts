import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRelicComponent } from './ngx-relic.component';

describe('NgxRelicComponent', () => {
  let component: NgxRelicComponent;
  let fixture: ComponentFixture<NgxRelicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxRelicComponent]
    });
    fixture = TestBed.createComponent(NgxRelicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
