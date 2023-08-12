import { TestBed } from '@angular/core/testing';

import { NgxRelicService } from './ngx-relic.service';

describe('NgxRelicService', () => {
  let service: NgxRelicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRelicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
