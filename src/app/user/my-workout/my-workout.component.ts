import { Component, OnInit } from '@angular/core';
// import { PracticeTimeService } from '../../../service/practice-time/practice-time.service';
import { MyWorkoutService } from '../../../service/my_Workout/my-workout.service';
import { User, UserInterface, AddUserInformation } from '../../../service/user/user-interface';
import { UserService } from '../../../service/user/user-service.service';
import { PracticeTime, } from '../../../service/my_Workout/my-workout-interface';
// import { HearderUserComponent } from '../../appLayout/hearder-user/hearder-user.component'

interface DayDetails  {
  day: number;
  month: number;
}

@Component({
  selector: 'app-my-workout',
  templateUrl: './my-workout.component.html',
  styleUrls: ['./my-workout.component.css']
})
export class MyWorkoutComponent {
  userInfo: User | null = null;
  practiceTimes: PracticeTime[] = [];

  daysOfWeek: string[] = ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
  currentDate: Date = new Date();
  // firstDay: Date = new Date();
  day: number = 0;
  lastDayOfMonth: number = 0;
  weeks: DayDetails[][];
  currentYear: number;
  currentMonth: number;
  years: number[] = this.generateYears(10);
  months: number[] = Array.from({ length: 12 }, (_, i) => i + 1);

  constructor(
    // private practiceTimeService: PracticeTimeService,
    private myWorkoutService: MyWorkoutService,
    // private hearderUserComponent :HearderUserComponent,
    private userService: UserService,
  ) {
    this.practiceTimes;
    this.currentDate = new Date();
    this.currentYear = this.currentDate.getFullYear();
    this.currentMonth = this.currentDate.getMonth() + 1;
    this.weeks = [];
  }

  ngOnInit(): void {
    this.UserInfo();
    this.calculateDaysInMonth();
  }

  UserInfo() {
    this.userService.getUserInfo().subscribe(
      (userInfo) => {
        this.userInfo = userInfo;
        if (this.userInfo?.id !== undefined) {
          // console.log(this.userInfo?.id);
          this.getpracticeTimesUserById(this.userInfo.id);
          // console.log(this.practiceTimes);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  getpracticeTimesUserById(id: number) {
    this.myWorkoutService.getPracticeTimes(id).subscribe(
      (response) => {
        // Xử lý dữ liệu sau khi nhận được từ API
        this.practiceTimes = response.$values;
        console.log(this.practiceTimes);
        // this.combineData();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // getPracticeTimesByTimeStart(id: number, timeStart: Date) {
  //   this.myWorkoutService.getPracticeTimesByTimeStart(id, timeStart).subscribe(
  //     (response) => {
  //       // Xử lý dữ liệu sau khi nhận được từ API
  //       this.practiceTimes = response.$values;
  //       console.log(this.practiceTimes);
  //       // this.combineData();
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  clickDay(day: number) {
    if (this.userInfo) {
      const id = this.userInfo.id;
      if (id) {
        const selectedDate = new Date(this.currentYear + `-` + this.currentMonth + `-` + day);
        const formattedDate = new Date(this.formatDate(selectedDate));

        this.myWorkoutService.getPracticeTimesByTimeStart(id, formattedDate).subscribe(
          (response) => {
            this.practiceTimes = response.$values;
            // console.log(this.practiceTimes);
            this.day = day
            // console.log(this.day);
          },
          (error) => {
            console.error(error);
          }
        );
      }
    }
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  calculateDaysInMonth() {
    const firstDay = new Date(this.currentYear, this.currentMonth - 1, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth, 0);
    const firstDayOfWeek = firstDay.getDay();
    this.lastDayOfMonth = lastDay.getDate();
    let daysInWeek: DayDetails[] = [];
    this.weeks = [];

    // Tính toán ngày của tháng trước 
    const prevMonthLastDay = new Date(this.currentYear, this.currentMonth - 1, 0);
    const prevMonthDays = prevMonthLastDay.getDate();
    for (let i = prevMonthDays - firstDayOfWeek + 1; i <= prevMonthDays; i++) {
      if(this.currentMonth ==1){
        daysInWeek.push({ day: i, month: 12 });
      } else{
        daysInWeek.push({ day: i, month: this.currentMonth - 1 });
      }
      
      // console.log(this.weeks + "hehehehe" + i + prevMonthDays + prevMonthLastDay);
    }

    for (let day = firstDay.getDate(); day <= lastDay.getDate(); day++) {
      daysInWeek.push({ day: day, month: this.currentMonth });
      if (daysInWeek.length === 7) {
        this.weeks.push([...daysInWeek]);
        daysInWeek = [];
      }
    }

    if (daysInWeek.length > 0) {
      const nextMonthFirstDay = new Date(this.currentYear, this.currentMonth, 1);
      const remainingDays = 7 - daysInWeek.length;

      for (let day = nextMonthFirstDay.getDate(); day <= nextMonthFirstDay.getDate() + remainingDays - 1; day++) {
        if(this.currentMonth == 12){
          daysInWeek.push({ day: day, month: 1 });
        } else{
          daysInWeek.push({ day: day, month: this.currentMonth + 1 });
        }
      }
    }

    if (daysInWeek.length > 0) {
      this.weeks.push([...daysInWeek]);
    }

    console.log(this.weeks + "hehehehe");
  }

  updateCurrentMonth(selectedMonth: number) {
    this.currentMonth = selectedMonth;
    this.calculateDaysInMonth();
  }

  updateCurrentMonthAndYear(offset: number) {
    const newMonth = this.currentMonth + offset;
    this.weeks = [];
    if (newMonth === 0) {
      this.currentMonth = 12;
      this.currentYear -= 1;
    } else if (newMonth === 13) {
      this.currentMonth = 1;
      this.currentYear += 1;
    } else {
      this.currentMonth = newMonth;
    }
    this.calculateDaysInMonth();
  }

  updateCurrentDayAndMonthAndYear(offset: number) {
    let day = this.day + offset;
    const newMonth = this.currentMonth;

    if (day === 0) {
      day = this.getDaysInMonth(this.currentYear, this.currentMonth - 1);
      this.day = this.getDaysInMonth(this.currentYear, this.currentMonth - 1);
      this.currentMonth -= 1;
      const newMonth = this.currentMonth;
      if (newMonth == 0) {
        this.currentYear -= 1;
        this.currentMonth = 12;
      }else {
        this.currentMonth = newMonth;
      }
    } else if (day === this.getDaysInMonth(this.currentYear, this.currentMonth) +1) {
      day = 1;
      this.day = 1;
      this.currentMonth += 1  
      const newMonth = this.currentMonth;
      if (newMonth == 13) {
        this.currentYear += 1;
        this.currentMonth = 1;
      }
      // this.currentYear -= 1;
    } else {
      this.currentMonth = newMonth;
    }
    this.calculateDaysInMonth();
    this.clickDay(day);
  }

  generateYears(yearsAhead: number): number[] {
    const currentYear = this.currentDate.getFullYear();
    const startYear = currentYear - (yearsAhead - 1); // Năm bắt đầu, ví dụ: 2013 nếu yearsAhead = 10
    const endYear = currentYear + yearsAhead; // Năm kết thúc, ví dụ: 2033 nếu yearsAhead = 10

    const yearArray: number[] = [];
    for (let year = startYear; year <= endYear; year++) {
      yearArray.push(year);
    }

    return yearArray;
  }

  getDaysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
  }

  formatDay(day: number): string {
    return day < 10 ? '0' + day : day.toString();
  }


}
