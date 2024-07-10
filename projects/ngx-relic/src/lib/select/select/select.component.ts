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

/**
 * @component
 * The `<ngx-select>` component is used to allow users to choose an option from a drop-down set of options. It is a highly
 * customizable component that supports multiple options, multiple selection, and various style and behavior settings.
 */
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
  options: T[] = [];

  /**
   * The label associated with the datepicker field.
   */
  @Input()
  label = '';

  /**
   * The placeholder text displayed when the field is empty.
   */
  @Input()
  placeholder = '';

  /**
   * Text displayed in the bottom of the input component when the
   * input value does not comply with the expected validation
   */
  @Input()
  errorText = '';

  /**
   * Text displayed in the bottom of the input component as a helper for the user
   */
  @Input()
  helperText = '';

  /**
   * Key label property from the type of objects passed through the options Input
   */
  @Input()
  labelKey = '';

  /**
   * Key value property from the type of objects passed through the options Input
   */
  @Input()
  valueKey = '';

  /**
   * Indicates if multiple option selection is enabled
   */
  @Input()
  multiple = false;

  /**
   * Indicates whether the input field is mandatory
   */
  @Input()
  required = false;

  /**
   * Indicates if the component is disabled
   */
  @Input()
  disabled = false;

  /**
   * Indicates if the select options are closed after the selection of an option
   */
  @Input()
  closeOnSelect = true;

  /**
   * Maximum number of selected options in the placeholder field
   */
  @Input()
  showMax = 1;

  protected isOpen = false;
  protected internalOptions: SelectOption[] = [];
  protected selectedOptions: T[] = [];
  private elementRef = inject(ElementRef);
  private injector = inject(Injector);
  protected control!: FormControl;
  protected destroy = new Subject();
  protected onChange!: OnChangeSelectFn<T>;
  protected onTouched!: OnTouched;

  /**
   * @private
   * @ignore
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const element = this.elementRef.nativeElement.querySelector('#element');
    if (this.isOpen && element && !element.contains(clickedElement)) {
      this.onTouched();
      this.isOpen = false;
    }
  }

  /**
   * @private
   * @ignore
   */
  ngOnInit() {
    this.internalOptions = this.options.map((i) => ({ ...i, selected: false }));
    this.setupModel();
  }

  /**
   * @private
   * @ignore
   */
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

  get itemScrollSize() {
    return this.options.length >= 4 ? 4 : this.options.length;
  }

  get itemBufferSize() {
    console.log(this.itemScrollSize * 38.8);
    return `${Math.round(this.itemScrollSize * 38.8)}px`;
  }

  protected setupModel() {
    const injectedControl = this.injector.get(NgControl);

    switch (injectedControl.constructor) {
      case NgModel: {
        const { control, update } = injectedControl as NgModel;

        this.control = control;

        this.control.valueChanges
          .pipe(
            tap((value: T) => update.emit(value)),
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

    this.control.registerOnDisabledChange((isDisabled) => {
      this.disabled = isDisabled;
    });

    this.disabled = this.control.status === 'DISABLED';
  }

  /**
   * @private
   * @ignore
   */
  writeValue(value: T[]): void {
    if (value) {
      this.selectedOptions = value;
    }
  }

  /**
   * @private
   * @ignore
   */
  registerOnChange(fn: OnChangeSelectFn<T>): void {
    this.onChange = fn;
  }

  /**
   * @private
   * @ignore
   */
  registerOnTouched(fn: OnTouched): void {
    this.onTouched = fn;
  }

  protected onMultipleClick(
    { selected, ...option }: SelectOption,
    index: number,
  ) {
    const selectedOption = this.selectedOptions.find(
      (i) =>
        this.getKeyValue(this.valueKey as U, i as T) ===
        this.getKeyValue(this.valueKey as U, option as T),
    );

    if (!selectedOption) {
      this.selectedOptions.push(option as T);
      this.internalOptions[index].selected = !selected;
    } else {
      this.selectedOptions = this.selectedOptions.filter(
        (i) =>
          this.getKeyValue(this.valueKey as U, i as T) !==
          this.getKeyValue(this.valueKey as U, option as T),
      );

      this.internalOptions[index].selected = !selected;
    }
    this.onTouched();
    this.onChange([...this.selectedOptions]);
    this.onItemClick();
  }

  protected onSingleClick({ selected, ...rest }: SelectOption, index: number) {
    this.clearSelection();
    this.selectedOptions = [rest as T];
    this.internalOptions[index].selected = !selected;
    this.onTouched();
    this.onChange(this.selectedOptions);
    this.onItemClick();
  }

  protected removeItem(item: SelectOption) {
    this.selectedOptions = this.selectedOptions.filter(
      (i) =>
        this.getKeyValue(this.valueKey as U, i as T) !==
        this.getKeyValue(this.valueKey as U, item as T),
    );
    const internalIndex = this.internalOptions.findIndex(
      (i) =>
        this.getKeyValue(this.valueKey as U, i as T) ===
        this.getKeyValue(this.valueKey as U, item as T),
    );
    this.internalOptions[internalIndex].selected = false;
    this.onChange(this.selectedOptions);
  }

  protected clearSelection() {
    const index = this.internalOptions.findIndex((i) => i.selected);
    if (index > -1) this.internalOptions[index].selected = false;
  }

  /**
   * Render the select options
   */
  openSelect() {
    this.isOpen = !this.isOpen;
  }

  protected onItemClick() {
    if (this.closeOnSelect) this.isOpen = false;
  }

  protected getKeyValue(key: U, object: T) {
    return object[key];
  }
}
