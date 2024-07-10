import { TestBed } from '@angular/core/testing';
import { CvaDirective } from './cva.directive';

describe('CvaDirective', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(async () => {
      const directive = new CvaDirective();
      expect(directive).toBeTruthy();
    });
  });
});
