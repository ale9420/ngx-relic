import {
  Component,
  ElementRef,
  HostListener,
  Input,
  inject,
} from '@angular/core';
import { DateTime } from 'luxon';
import { CvaDirective } from '../core/cva.directive';
import { Day } from '../core/types';

/**
 * The `<ngx-datepicker>` component is used to allow users to select a date in an easy and visual way. It is a
 * flexible component that offers customization options to suit the needs of any application.
 */
@Component({
  selector: 'ngx-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
  hostDirectives: [
    {
      directive: CvaDirective,
    },
  ],
})
export class DatepickerComponent {
  /**
   * Indicates whether the input field is mandatory
   */
  @Input()
  required = false;

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
   * Language format
   */
  @Input()
  locale = 'en';

  protected internalDate = null;
  protected selectedDate!: string;
  protected showCalendar = false;
  protected changeYear = false;
  protected calendarWidth!: string;
  protected currentMonth!: string;
  protected currentYear!: number;
  protected daysInMonth: any[] = [];
  protected years: number[] = [];
  protected weekdays: Day[] = [];

  protected readonly _cvaDirective = inject<CvaDirective>(CvaDirective);

  private elementRef = inject(ElementRef);

  get currentPlaceholder() {
    return this.selectedDate ?? this.placeholder;
  }

  /**
   * @private
   * @ignore
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const datepickerElement = this.elementRef.nativeElement;
    const clickedInside = datepickerElement.contains(event.target);
    if (!clickedInside) {
      this.showCalendar = false;
    }
  }

  constructor() {
    this.initWeekDays();
    this.initCalendar(DateTime.now().setLocale(this.locale));
    this.initYears();
  }

  /**
   * @private
   * @ignore
   */
  ngOnInit() {
    const styles = getComputedStyle(this.elementRef.nativeElement);
    this.calendarWidth = styles.width;
  }

  protected initWeekDays() {
    this.weekdays = [];
    const firstDayOfWeek = DateTime.local()
      .setLocale(this.locale)
      .startOf('week');

    for (let i = 0; i < 7; i++) {
      const name = firstDayOfWeek.plus({ days: i }).toFormat('cccc');
      this.weekdays.push({ day: i + 1, name });
    }
  }

  protected initCalendar(date: DateTime) {
    this.currentMonth = date.toFormat('MMMM');
    this.currentYear = date.year;
    this.daysInMonth = [];

    const startOfMonth = date.startOf('month');
    const endOfMonth = date.endOf('month');
    const initialEmptyCells = startOfMonth.weekday;
    const lastEmptyCells = 7 - endOfMonth.weekday;
    const daysInMonth = startOfMonth.daysInMonth || 0;
    const arrayLength = initialEmptyCells + lastEmptyCells + daysInMonth;
    let currentDate = startOfMonth;

    for (let i = 1; i < arrayLength; i++) {
      let day: any = {};

      if (i < initialEmptyCells || i > initialEmptyCells + daysInMonth - 1) {
        day.value = 0;
        day.available = false;
      } else {
        day.value = i - initialEmptyCells + 1;
        day.available = this.isAvailable(i - initialEmptyCells + 1);
        day.date = currentDate;
        currentDate = currentDate.plus({ day: 1 });
      }

      this.daysInMonth.push(day);
    }
  }

  protected initYears() {
    let currentYear = new Date().getFullYear();
    for (let i = 0; i <= 15; i++) {
      this.years.push(currentYear);
      currentYear++;
    }
  }

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }

  protected onYearClick() {
    this.changeYear = !this.changeYear;
  }

  protected isAvailable(num: number) {
    return num === 5 ? false : true;
  }

  protected isDaySelected(day: DateTime) {
    return day.toFormat('yyyy-MM-dd') === this.selectedDate;
  }

  protected previousYear() {
    let currentYear = this.years[0] - 10;
    this.years = [];
    for (let i = 0; i <= 15; i++) {
      this.years.push(currentYear);
      currentYear--;
    }
  }

  protected nextYear() {
    let currentYear = this.years.slice(-1)[0] + 10;
    this.years = [];

    for (let i = 0; i <= 15; i++) {
      this.years.push(currentYear);
      currentYear++;
    }
  }

  protected previousMonth(): void {
    const currentDate = DateTime.fromFormat(
      `${this.currentYear}-${this.currentMonth}`,
      'yyyy-MMMM',
    );
    this.initCalendar(currentDate.minus({ months: 1 }));
  }

  protected nextMonth(): void {
    const currentDate = DateTime.fromFormat(
      `${this.currentYear}-${this.currentMonth}`,
      'yyyy-MMMM',
    );
    this.initCalendar(currentDate.plus({ months: 1 }));
  }

  protected selectYear(year: number) {
    const currentDate = DateTime.fromObject({ year, month: 1, day: 1 });
    this.initCalendar(currentDate);
    this.onYearClick();
  }

  protected selectDate(day: any) {
    this.selectedDate = day.date.toFormat('yyyy-MM-dd');
    this.onChange(this.selectedDate);
    this.showCalendar = false;
  }

  protected onChange(value: string | number) {
    this._cvaDirective.onChange(value);
    this._cvaDirective.onTouched();
  }
}
