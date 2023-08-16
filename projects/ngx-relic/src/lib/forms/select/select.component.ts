import {
  Component,
  OnInit,
  Input,
  HostListener,
  ElementRef,
  inject,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { OnChangeSelectFn, OnTouched, SelectOption } from '../../types';

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
  labelKey = '';

  @Input()
  valueKey = '';

  @Input()
  multiple = false;

  @Input()
  showMax = 1;

  touched = false;
  disabled = false;
  isOpen = false;
  internalOptions: SelectOption[] = [];
  selectedOptions: T[] = [];
  onChange!: OnChangeSelectFn<T>;
  onTouched!: OnTouched;
  private elementRef = inject(ElementRef);

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const element = this.elementRef.nativeElement.querySelector('#element');
    if (element && !element.contains(clickedElement)) {
      this.isOpen = false;
    }
  }

  ngOnInit(): void {
    this.internalOptions = this.options.map((i) => ({ ...i, selected: false }));
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

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
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
    this.markAsTouched();
    this.onChange([...this.selectedOptions]);
  }

  onSingleClick({ selected, ...rest }: SelectOption, index: number) {
    this.clearSelection();
    this.selectedOptions = [rest as T];
    this.internalOptions[index].selected = !selected;
    this.markAsTouched();
    this.onChange(this.selectedOptions);
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

  getKeyValue(key: U, object: T) {
    return object[key];
  }
}
