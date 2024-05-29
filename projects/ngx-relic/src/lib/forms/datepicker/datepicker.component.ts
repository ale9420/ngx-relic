import { Component, ElementRef, Input, inject } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'ngx-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
})
export class DatepickerComponent {
  @Input()
  required = false;

  @Input()
  disabled = false;

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

  calendarWidth!: string;
  currentMonth!: string;
  currentYear!: number;
  daysInMonth: any[] = [];

  private elementRef = inject(ElementRef);

  get hasErrors() {
    return false;
  }

  constructor() {
    this.initCalendar(DateTime.now());
  }

  ngOnInit() {
    const styles = getComputedStyle(this.elementRef.nativeElement);
    this.calendarWidth = styles.width;
    console.log(styles.width);
  }

  initCalendar(date: DateTime) {
    this.currentMonth = date.toFormat('MMMM');
    this.currentYear = date.year;
    this.daysInMonth = [];

    const startOfMonth = date.startOf('month');
    const endOfMonth = date.endOf('month');

    for (
      let day = startOfMonth;
      day <= endOfMonth;
      day = day.plus({ days: 1 })
    ) {
      this.daysInMonth.push({ day: day.day, date: day });
    }

    console.log(this.daysInMonth);
  }

  selectDate(day: any) {
    this.selectedDate = day.date.toFormat('yyyy-MM-dd');
    this.showCalendar = false;
  }

  toggleCalendar() {
    this.showCalendar = !this.showCalendar;
  }
}
