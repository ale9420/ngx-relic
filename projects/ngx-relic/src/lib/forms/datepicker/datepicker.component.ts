import {
  Component,
  ElementRef,
  HostListener,
  Input,
  inject,
  signal,
} from '@angular/core';
import { DateTime } from 'luxon';
import { CvaDirective } from '../cva.directive';

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
  @Input()
  required = false;

  @Input()
  label = '';

  @Input()
  placeholder = '';

  @Input()
  errorText = '';

  @Input()
  helperText = '';

  internalDate = null;
  selectedDate!: string;
  showCalendar = false;
  changeYear = signal(false);
  calendarWidth!: string;
  currentMonth!: string;
  currentYear!: number;
  daysInMonth: any[] = [];
  years: number[] = [];
  weekdays = [
    { day: 1, name: 'Lunes' },
    { day: 2, name: 'Martes' },
    { day: 3, name: 'Miercoles' },
    { day: 4, name: 'Jueves' },
    { day: 5, name: 'Viernes' },
    { day: 6, name: 'Sabado' },
    { day: 7, name: 'Domingo' },
  ];

  readonly _cvaDirective = inject<CvaDirective>(CvaDirective);

  private elementRef = inject(ElementRef);

  get currentPlaceholder() {
    return this.selectedDate ?? this.placeholder;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const datepickerElement = this.elementRef.nativeElement;
    const clickedInside = datepickerElement.contains(event.target);
    if (!clickedInside) {
      this.showCalendar = false;
    }
  }

  constructor() {
    this.initCalendar(DateTime.now());
    this.initYears();
  }

  ngOnInit() {
    const styles = getComputedStyle(this.elementRef.nativeElement);
    this.calendarWidth = styles.width;
  }

  initCalendar(date: DateTime) {
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

  initYears() {
    let currentYear = new Date().getFullYear();
    for (let i = 0; i <= 15; i++) {
      this.years.push(currentYear);
      currentYear++;
    }
  }

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }

  onYearClick() {
    this.changeYear.update((value) => !value);
  }

  isAvailable(num: number) {
    return num === 5 ? false : true;
  }

  isDaySelected(day: DateTime) {
    return day.toFormat('yyyy-MM-dd') === this.selectedDate;
  }

  previousYear() {
    let currentYear = this.years[0] - 10;
    this.years = [];
    for (let i = 0; i <= 15; i++) {
      this.years.push(currentYear);
      currentYear--;
    }
  }

  nextYear() {
    let currentYear = this.years.slice(-1)[0] + 10;
    this.years = [];

    for (let i = 0; i <= 15; i++) {
      this.years.push(currentYear);
      currentYear++;
    }
  }

  previousMonth(): void {
    const currentDate = DateTime.fromFormat(
      `${this.currentYear}-${this.currentMonth}`,
      'yyyy-MMMM',
    );
    this.initCalendar(currentDate.minus({ months: 1 }));
  }

  nextMonth(): void {
    const currentDate = DateTime.fromFormat(
      `${this.currentYear}-${this.currentMonth}`,
      'yyyy-MMMM',
    );
    this.initCalendar(currentDate.plus({ months: 1 }));
  }

  selectYear(year: number) {
    const currentDate = DateTime.fromObject({ year, month: 1, day: 1 });
    this.initCalendar(currentDate);
    this.onYearClick();
  }

  selectDate(day: any) {
    this.selectedDate = day.date.toFormat('yyyy-MM-dd');
    this.onChange(this.selectedDate);
    this.showCalendar = false;
  }

  onChange(value: string | number) {
    this._cvaDirective.onChange(value);
    this._cvaDirective.onTouched();
  }
}
