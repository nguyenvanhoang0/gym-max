import { Injectable } from '@angular/core';
import { IDayDetails } from './day-details-interface';
@Injectable({
  providedIn: 'root'
})
export class WorkoutScheduleService {

  constructor() { }
  lastDayOfMonth: number = 0;
  weeks!: IDayDetails[][];
  today! : IDayDetails

  calculateDaysInMonth(currentYear: number, currentMonth: number) {
    const today = new Date();
    const firstDay = new Date(currentYear, currentMonth - 1, 1);
    const lastDay = new Date(currentYear, currentMonth, 0);
    const firstDayOfWeek = firstDay.getDay();
    this.lastDayOfMonth = lastDay.getDate();
    this.weeks = [];
  
    let daysInWeek: IDayDetails[] = [];
  
    const addDaysInWeek = () => {
      this.weeks.push([...daysInWeek]);
      daysInWeek = [];
    };
  
    // Days from previous month
    const prevMonthLastDay = new Date(currentYear, currentMonth - 1, 0);
    const prevMonthDays = prevMonthLastDay.getDate();
    for (let i = prevMonthDays - firstDayOfWeek + 1; i <= prevMonthDays; i++) {
      const month = currentMonth === 1 ? 12 : currentMonth - 1;
      const year = currentMonth === 1 ? currentYear - 1 : currentYear;
      const status = this.calculateDayStatus(i, month, year, today);
      daysInWeek.push({ day: i, month, year, status });
    }
  
    // Days from current month
    for (let day = firstDay.getDate(); day <= lastDay.getDate(); day++) {
      const status = this.calculateDayStatus(day, currentMonth, currentYear, today);
      daysInWeek.push({ day, month: currentMonth, year: currentYear, status });
  
      if (daysInWeek.length === 7) {
        addDaysInWeek();
      }
    }
  
    // Days from next month
    const nextMonthFirstDay = new Date(currentYear, currentMonth, 1);
    const remainingDays = 7 - daysInWeek.length;
    for (let day = nextMonthFirstDay.getDate(); day <= nextMonthFirstDay.getDate() + remainingDays - 1; day++) {
      const month = currentMonth === 12 ? 1 : currentMonth + 1;
      const year = currentMonth === 12 ? currentYear + 1 : currentYear;
      const status = this.calculateDayStatus(day, month, year, today);
      daysInWeek.push({ day, month, year, status });
    }
  
    addDaysInWeek();
  
    // Fill remaining weeks
    while (this.weeks.length < 6) {
      const lastWeek = this.weeks[this.weeks.length - 1];
      const lastDayOfLastWeek = lastWeek[lastWeek.length - 1];
      const nextMonthDay = new Date(currentYear, currentMonth, lastDayOfLastWeek.day + 1);
  
      const remainingDays = 7 - daysInWeek.length;
      for (let day = nextMonthDay.getDate(); day <= nextMonthDay.getDate() + remainingDays - 1; day++) {
        const month = currentMonth === 12 ? 1 : currentMonth + 1;
        const year = currentMonth === 12 ? currentYear + 1 : currentYear;
        const status = this.calculateDayStatus(day, month, year, today);
        daysInWeek.push({ day, month, year, status });
      }
  
      addDaysInWeek();
    }
  console.log(this.weeks);
  
    return this.weeks;
  }
  
  calculateDayStatus(day: number, month: number, year: number, today: Date): 'past' | 'today' | 'future' {
    const compareDate = new Date(year, month - 1, day);
    const compareDateString = compareDate.toDateString();
    const todayDateString = today.toDateString();
  
    return compareDateString === todayDateString
      ? 'today'
      : compareDate < today
        ? 'past'
        : 'future';
  }

  getTodayDetails(): IDayDetails {
    const todayDate = new Date();
    const todayDetails: IDayDetails = {
      day: todayDate.getDate(),
      month: todayDate.getMonth() + 1, // Tháng trong JavaScript là từ 0 đến 11, nên cần cộng thêm 1.
      year: todayDate.getFullYear(),
      status: 'today',
    };

    return todayDetails;
  }
  
}
