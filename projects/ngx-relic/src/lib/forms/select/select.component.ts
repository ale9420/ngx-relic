import {
  Component,
  OnInit,
  Input,
  HostListener,
  ElementRef,
  inject,
  forwardRef,
  Injector,
} from '@angular/core';
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
import { OnChangeSelectFn, OnTouched, SelectOption } from '../../types';
import { Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'ngx-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SelectComponent),
    },
  ],
})
export class SelectComponent<T extends object, U extends keyof T>
  implements OnInit, ControlValueAccessor
{
  @Input()
  options!: T[];

  @Input()
  label = '';

  @Input()
  placeholder = '';

  @Input()
  errorText = '';

  @Input()
  helperText = '';

  @Input()
  labelKey = '';

  @Input()
  valueKey = '';

  @Input()
  multiple = false;

  @Input()
  required = false;

  @Input()
  disabled = false;

  @Input()
  closeOnSelect = true;

  @Input()
  showMax = 1;

  isOpen = false;
  internalOptions: SelectOption[] = [];
  selectedOptions: T[] = [];
  private elementRef = inject(ElementRef);
  private injector = inject(Injector);
  control!: FormControl;
  destroy = new Subject();
  onChange!: OnChangeSelectFn<T>;
  onTouched!: OnTouched;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const element = this.elementRef.nativeElement.querySelector('#element');
    if (this.isOpen && element && !element.contains(clickedElement)) {
      this.onTouched();
      this.isOpen = false;
    }
  }

  ngOnInit() {
    this.internalOptions = this.options.map((i) => ({ ...i, selected: false }));
    this.setupModel();
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.complete();
  }

  get showSelectedOptions() {
    return this.selectedOptions.slice(0, this.showMax);
  }

  get selectedLabels() {
    if (this.selectedOptions.length === 0) return this.placeholder;

    if (this.multiple)
      return this.selectedOptions
        .map((i) => this.getKeyValue(this.labelKey as U, i))
        .join(',');

    return this.getKeyValue(this.labelKey as U, this.selectedOptions[0]);
  }

  get hasErrors() {
    return this.control.errors && this.control.touched;
  }

  setupModel() {
    const injectedControl = this.injector.get(NgControl);

    switch (injectedControl.constructor) {
      case NgModel: {
        const { control, update } = injectedControl as NgModel;

        this.control = control;

        this.control.valueChanges
          .pipe(
            tap((value: T) => update.emit(value)),
            takeUntil(this.destroy)
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

    this.control.registerOnDisabledChange((isDisabled) => {
      this.disabled = isDisabled;
    });

    this.disabled = this.control.status === 'DISABLED';
  }

  writeValue(value: T[]): void {
    if (value) {
      this.selectedOptions = value;
    }
  }

  registerOnChange(fn: OnChangeSelectFn<T>): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouched): void {
    this.onTouched = fn;
  }

  onMultipleClick({ selected, ...option }: SelectOption, index: number) {
    const selectedOption = this.selectedOptions.find(
      (i) =>
        this.getKeyValue(this.valueKey as U, i as T) ===
        this.getKeyValue(this.valueKey as U, option as T)
    );

    if (!selectedOption) {
      this.selectedOptions.push(option as T);
      this.internalOptions[index].selected = !selected;
    } else {
      this.selectedOptions = this.selectedOptions.filter(
        (i) =>
          this.getKeyValue(this.valueKey as U, i as T) !==
          this.getKeyValue(this.valueKey as U, option as T)
      );

      this.internalOptions[index].selected = !selected;
    }
    this.onTouched();
    this.onChange([...this.selectedOptions]);
    this.onItemClick();
  }

  onSingleClick({ selected, ...rest }: SelectOption, index: number) {
    this.clearSelection();
    this.selectedOptions = [rest as T];
    this.internalOptions[index].selected = !selected;
    this.onTouched();
    this.onChange(this.selectedOptions);
    this.onItemClick();
  }

  removeItem(item: SelectOption) {
    this.selectedOptions = this.selectedOptions.filter(
      (i) =>
        this.getKeyValue(this.valueKey as U, i as T) !==
        this.getKeyValue(this.valueKey as U, item as T)
    );
    const internalIndex = this.internalOptions.findIndex(
      (i) =>
        this.getKeyValue(this.valueKey as U, i as T) ===
        this.getKeyValue(this.valueKey as U, item as T)
    );
    this.internalOptions[internalIndex].selected = false;
    this.onChange(this.selectedOptions);
  }

  clearSelection() {
    const index = this.internalOptions.findIndex((i) => i.selected);
    if (index > -1) this.internalOptions[index].selected = false;
  }

  openSelect() {
    this.isOpen = !this.isOpen;
  }

  onItemClick() {
    if (this.closeOnSelect) this.isOpen = false;
  }

  getKeyValue(key: U, object: T) {
    return object[key];
  }
}
