import { Injectable } from '@angular/core';
import { DayDetailsInterface } from './day-details-interface';
@Injectable({
  providedIn: 'root'
})
export class WorkoutScheduleService {

  constructor() { }
  lastDayOfMonth: number = 0;
  weeks!: DayDetailsInterface[][];

  calculateDaysInMonth(currentYear: number, currentMonth: number) {
    const today = new Date();
    const firstDay = new Date(currentYear, currentMonth - 1, 1);
    const lastDay = new Date(currentYear, currentMonth, 0);
    const firstDayOfWeek = firstDay.getDay();
    this.lastDayOfMonth = lastDay.getDate();
    let daysInWeek: DayDetailsInterface[] = [];
    this.weeks = [];

    // Tính toán ngày của tháng trước
    const prevMonthLastDay = new Date(currentYear, currentMonth - 1, 0);
    const prevMonthDays = prevMonthLastDay.getDate();
    for (let i = prevMonthDays - firstDayOfWeek + 1; i <= prevMonthDays; i++) {
      // console.log(currentMonth);
      if (today.getMonth() + 1 < currentMonth || today.getFullYear() + 1 <= currentYear) {
        if (currentMonth == 1) {
          daysInWeek.push({ day: i, month: 12, year: currentYear - 1, status: 'future' });
        } else {
          daysInWeek.push({ day: i, month: currentMonth - 1, year: currentYear, status: 'future' });
        }
      } else {
        if (currentMonth == 1) {
          daysInWeek.push({ day: i, month: 12, year: currentYear - 1, status: 'past' });
        } else {
          daysInWeek.push({ day: i, month: currentMonth - 1, year: currentYear, status: 'past' });
        }
      }
    }

    for (let day = firstDay.getDate(); day <= lastDay.getDate(); day++) {
      const status = this.calculateDayStatus(day, currentMonth, currentYear, today);
      daysInWeek.push({ day, month: currentMonth, year: currentYear, status });

      if (daysInWeek.length === 7) {
        this.weeks.push([...daysInWeek]);
        daysInWeek = [];
        console.log(this.weeks);

      }

    }

    if (daysInWeek.length > 0) {
      const nextMonthFirstDay = new Date(currentYear, currentMonth, 1);
      const remainingDays = 7 - daysInWeek.length;

      for (let day = nextMonthFirstDay.getDate(); day <= nextMonthFirstDay.getDate() + remainingDays - 1; day++) {
        if (currentMonth == 12) {
          // const Month  = 1
          if (today.getMonth() + 1 <= currentMonth || today.getFullYear() + 1 <= currentYear) {
            daysInWeek.push({ day, month: 1, year: currentYear + 1, status: 'future' });
          } else {
            daysInWeek.push({ day, month: 1, year: currentYear + 1, status: 'past' });

          }
        } else {
          const Month = currentMonth + 1
          if (today.getMonth() + 1 <= currentMonth || today.getFullYear() + 1 <= currentYear) {

            daysInWeek.push({ day, month: Month, year: currentYear, status: 'future' });
          } else {
            console.log(today.getMonth() <= currentMonth);

            daysInWeek.push({ day, month: Month, year: currentYear, status: 'past' });
          }
        }
      }
    }

    if (daysInWeek.length > 0) {
      this.weeks.push([...daysInWeek]);
      daysInWeek = [];
      console.log(this.weeks);
    }

    while (this.weeks.length < 6) {

      const lastWeek = this.weeks[this.weeks.length - 1];
      const lastDayOfLastWeek = lastWeek[lastWeek.length - 1];
      const nextMonthDay = new Date(currentYear, currentMonth, lastDayOfLastWeek.day + 1);
      let day = nextMonthDay.getDate();

      const remainingDays = 7 - daysInWeek.length;

      for (day; day <= nextMonthDay.getDate() + remainingDays - 1; day++) {
        const Month = currentMonth + 1;

        if (today.getMonth() + 1 <= currentMonth || today.getFullYear() + 1 <= currentYear) {
          daysInWeek.push({ day, month: Month, year: currentYear, status: 'future' });

        } else {
          daysInWeek.push({ day, month: Month, year: currentYear, status: 'past' });
        }
      }

      this.weeks.push([...daysInWeek]);
      daysInWeek = [];
    }
    return this.weeks;
  }

  calculateDayStatus(day: number, month: number, year: number, today: Date): 'past' | 'today' | 'future' {
    const compareDate = new Date(year, month - 1, day);

    if (compareDate.toDateString() === today.toDateString()) {
      return 'today';
    } else if (compareDate < today) {
      return 'past';
    } else {
      return 'future';
    }
  }
}
