import {
  Directive,
  Injector,
  OnDestroy,
  OnInit,
  forwardRef,
  inject,
} from '@angular/core';
import { OnChange, OnTouched } from '../types';
import {
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgModel,
} from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';

@Directive({
  selector: '[ngxCva]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CvaDirective),
    },
  ],
})
export class CvaDirective implements ControlValueAccessor, OnInit, OnDestroy {
  onChange!: OnChange;
  onTouched!: OnTouched;
  control!: FormControl;
  destroy = new Subject();
  private _internalValue: any;
  _disabled = false;
  private injector = inject(Injector);

  constructor() {}

  get hasErrors() {
    return this.control.errors && this.control.touched;
  }

  ngOnInit(): void {
    const injectedControl = this.injector.get(NgControl);

    switch (injectedControl.constructor) {
      case NgModel: {
        const { control, update } = injectedControl as NgModel;

        this.control = control;

        this.control.valueChanges
          .pipe(
            tap((value) => update.emit(value)),
            takeUntil(this.destroy),
          )
          .subscribe();
        break;
      }
      case FormControlName: {
        this.control = this.injector
          .get(FormGroupDirective)
          .getControl(injectedControl as FormControlName);
        break;
      }
      default: {
        this.control = (injectedControl as FormControlDirective)
          .form as FormControl;
        break;
      }
    }

    this._disabled = this.control.status === 'DISABLED';
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.complete();
  }

  writeValue(value: any): void {
    if (value) this._internalValue = value;
  }
  registerOnChange(fn: OnChange): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: OnTouched): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }
}
