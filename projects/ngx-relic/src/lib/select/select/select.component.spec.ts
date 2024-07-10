// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import {
//   FormsModule,
//   NG_VALUE_ACCESSOR,
//   ReactiveFormsModule,
// } from '@angular/forms';
// import { ScrollingModule } from '@angular/cdk/scrolling';
// import { SelectComponent } from './select.component';
// import { PlaceholderModule } from '../../placeholder';
// import { BaseInputModule } from '../../base-input';
// import { ButtonModule } from '../../button';
// import { TagModule } from '../../tag';
// import { forwardRef } from '@angular/core';

// describe('SelectComponent', () => {
//   let component: SelectComponent<any, any>;
//   let fixture: ComponentFixture<SelectComponent<any, any>>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [SelectComponent],
//       providers: [
//         {
//           provide: NG_VALUE_ACCESSOR,
//           useExisting: forwardRef(() => SelectComponent),
//           multi: true,
//         },
//       ],
//       imports: [
//         FormsModule,
//         ReactiveFormsModule,
//         ScrollingModule,
//         PlaceholderModule,
//         BaseInputModule,
//         ButtonModule,
//         TagModule,
//       ],
//     });
//     fixture = TestBed.createComponent(SelectComponent);
//     fixture.debugElement.injector.get(NG_VALUE_ACCESSOR);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { runValueAccessorTests } from `ngx-cva-test-suite`;
import { SelectComponent } from './select.component';

runValueAccessorTests({
  component: SelectComponent
})