import { Component, Output, EventEmitter } from '@angular/core';
import { IMonthDetails } from '../../../service/workout-schedule/day-details-interface';

@Component({
  selector: 'app-select-month',
  templateUrl: './select-month.component.html',
  styleUrls: ['./select-month.component.css']
})
export class SelectMonthComponent {

  @Output() monthDetails = new EventEmitter<IMonthDetails>();
  // month!: IMonthDetails;
  // @Output() currentMonth: number ;
  // @Output() currentYear: number ;


  currentDate: Date = new Date();
  currentYear: number;
  currentMonth: number;

  months: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  years: number[] = this.generateYears(10);


  constructor(
    // private monthDetails: IMonthDetails
  ) {
    this.currentDate = new Date();
    this.currentMonth = this.currentDate.getMonth() + 1,
      this.currentYear = this.currentDate.getFullYear()

    const monthDetails: IMonthDetails = {
      currentMonth: this.currentMonth,
      currentYear: this.currentYear
    };
    this.monthDetails.emit(monthDetails);
  }

  ngOnInit(): void {
    const monthDetails: IMonthDetails = {
      currentMonth: this.currentMonth,
      currentYear: this.currentYear
    };
    this.monthDetails.emit(monthDetails);
    console.log(this.monthDetails + "sâsasa");
    
  }

  updateCurrentMonthAndYear(offset: number) {
    const newMonth = this.currentMonth + offset;

    if (newMonth === 0 || newMonth === 13) {
      this.currentMonth = newMonth === 0 ? 12 : 1;
      this.currentYear += offset > 0 ? 1 : -1;

    } else {
      this.currentMonth = newMonth;
    }
    this.emitMonthDetails(this.currentMonth, this.currentYear)
    console.log(4);
  }

  updateCurrentMonth(selectedMonth: number) {
    this.currentMonth = selectedMonth;
    this.emitMonthDetails(this.currentMonth, this.currentYear)
    console.log(3);

  }

  updateCurrentYear(currentYear: number) {
    this.currentYear = currentYear;
    console.log(3);

    this.emitMonthDetails(this.currentMonth, this.currentYear)
  }

  generateYears(yearsAhead: number): number[] {
    const currentYear = this.currentDate.getFullYear();
    const startYear = currentYear - (yearsAhead - 1); 
    const endYear = currentYear + yearsAhead; 

    const yearArray: number[] = [];
    for (let year = startYear; year <= endYear; year++) {
      yearArray.push(year);
    }

    return yearArray;
  }

  private emitMonthDetails(currentMonth: number, currentYear: number) {
    const monthDetails: IMonthDetails = {
      currentMonth: currentMonth,
      currentYear: currentYear
    };

    this.monthDetails.emit(monthDetails);
    // console.log("kkkkkk");
    
  }
}
