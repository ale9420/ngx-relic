import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './index';
import { BaseInputModule } from '../base-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [BaseInputModule, FormsModule, ReactiveFormsModule, CoreModule],
    });
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
