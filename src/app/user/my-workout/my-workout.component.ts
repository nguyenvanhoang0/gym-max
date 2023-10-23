import { Component,OnInit  } from '@angular/core';
import { PracticeTimeService } from '../../../service/practice-time/practice-time.service';
import { PracticeTime , PracticeTimes } from '../../../service/practice-time/practice-time-interface';
@Component({
  selector: 'app-my-workout',
  templateUrl: './my-workout.component.html',
  styleUrls: ['./my-workout.component.css']
})
export class MyWorkoutComponent {
  practiceTimes: PracticeTime[] = [];
  daysOfWeek: string[] = [ 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7','Chủ Nhật'];
  currentDate: Date = new Date();
  firstDay: Date = new Date();
  daysInMonth: number[] = [];


  weeks: number[][] = [];
  constructor(private practiceTimeService: PracticeTimeService) {
    this.practiceTimes;
  }

  ngOnInit(): void {
    this.getpracticeTimes();
    // this.getDaysInMonths();
  }

  getpracticeTimes() {
    this.practiceTimeService.getPracticeTimes().subscribe(
      (response) => {
        // Xử lý dữ liệu sau khi nhận được từ API
        this.practiceTimes = response.$values; 
        console.log(this.practiceTimes);
        
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // getDaysInMonth(): number[] {
  //   const daysInMonth: number[] = [];
  //   const firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
  //   const lastDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);

  //   for (let day = firstDay.getDate(); day <= lastDay.getDate(); day++) {
  //     daysInMonth.push(day);
  //   }

  //   return daysInMonth;
  // }

  // calculateDaysInMonth() {
  //   this.daysInMonth = [];
  //   this.firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
  //   const startDay = this.firstDay.getDay() === 0 ? 7 : this.firstDay.getDay(); // Đổi Chủ Nhật thành ngày thứ 7

  //   for (let i = 1; i < startDay; i++) {
  //     this.daysInMonth.push(0); // Thêm số 0 đại diện cho các ngày trống
  //   }

  //   for (let day = 1; day <= new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate(); day++) {
  //     this.daysInMonth.push(day);
  //   }
  // }

  getDaysInMonths(year: number, month: number) {
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
console.log(startDate);
console.log(endDate);


    let currentDay = startDate;
    let currentWeek: number[] = [];

    while (currentDay <= endDate) {
      currentWeek.push(currentDay.getDate());

      if (currentDay.getDay() === 6) {
        this.weeks.push([...currentWeek]);
        currentWeek = [];
      }

      currentDay.setDate(currentDay.getDate() + 1);
    }

    // If there are remaining days in the last week
    if (currentWeek.length > 0) {
      this.weeks.push([...currentWeek]);
    }
  }
}
