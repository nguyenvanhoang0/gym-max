import { Component, OnInit } from '@angular/core';
// import { PracticeTimeService } from '../../../service/practice-time/practice-time.service';
import { MyWorkoutService } from '../../../service/my_Workout/my-workout.service';
import { User, UserInterface, AddUserInformation } from '../../../service/user/user-interface';
import { UserService } from '../../../service/user/user-service.service';
import { PracticeTime, PracticeTimes } from '../../../service/practice-time/practice-time-interface';
// import { HearderUserComponent } from '../../appLayout/hearder-user/hearder-user.component'
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
  weeks: number[][] = [];
  currentYear: number;
  currentMonth: number;
  years: number[] = this.generateYears(10);
  months: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  // combinedData: any[] = [];

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
          console.log(this.userInfo?.id);
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

  getPracticeTimesByTimeStart(id: number, timeStart: Date) {
    this.myWorkoutService.getPracticeTimesByTimeStart(id, timeStart).subscribe(
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

  clickDay(day: number) {
    if (this.userInfo) {
      const id = this.userInfo.id;
      if (id) {
        const selectedDate = new Date(this.currentYear + `-` + this.currentMonth + `-` + day);
        const formattedDate = new Date(this.formatDate(selectedDate));

        this.myWorkoutService.getPracticeTimesByTimeStart(id, formattedDate).subscribe(
          (response) => {
            this.practiceTimes = response.$values;
            console.log(this.practiceTimes);
            this.day = day
            console.log(this.day);
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
    this.weeks = [];

    const firstDay = new Date(this.currentYear, this.currentMonth - 1, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth, 0);
    const firstDayOfWeek = firstDay.getDay(); // Ngày đầu tiên rơi vào tuần nào (0 là Chủ Nhật, 1 là Thứ 2, ...)
    this.lastDayOfMonth = lastDay.getDate();
    let weeks: number[] = [];
    console.log(this.lastDayOfMonth);


    // Tính toán ngày của tháng trước (nếu cần)
    const prevMonthLastDay = new Date(this.currentYear, this.currentMonth - 1, 0);
    const prevMonthDays = prevMonthLastDay.getDate();
    for (let i = prevMonthDays - firstDayOfWeek + 1; i <= prevMonthDays; i++) {
      weeks.push(i);
    }

    for (let day = firstDay.getDate(); day <= lastDay.getDate(); day++) {
      weeks.push(day);
      if (weeks.length === 7) {
        this.weeks.push(weeks);
        weeks = [];
      }
    }

    // Tính toán ngày của tháng tiếp theo (nếu cần)
    if (weeks.length > 0) {
      const nextMonthFirstDay = new Date(this.currentYear, this.currentMonth, 1);
      const remainingDays = 7 - weeks.length;

      for (let day = nextMonthFirstDay.getDate(); day <= nextMonthFirstDay.getDate() + remainingDays - 1; day++) {
        weeks.push(day);
      }

    }
    console.log(this.weeks);


    this.weeks.push(weeks);
  }

  // isTargetMonth(day: number): boolean {
  //   if (this.currentMonth === 2) {
  //     return day === 28 || day === 29;
  //   } else if ([4, 6, 9, 11].includes(this.currentMonth)) {
  //     return day <= 30;
  //   } else {
  //     return day <= 31;
  //   }
  // }





  // combineData() {
  //   for (let i = 0; i < this.practiceTimes.length; i++) {
  //     const daysOfWeek = this.weeks[i];
  //     this.combinedData.push({ practiceTime: this.practiceTimes[i], daysOfWeek });
  //     console.log(this.combinedData);

  //   }
  // }

  // updateCurrentMonthAndYear() {
  //   // this.currentYear = year;
  //   // this.currentMonth = month;
  //   this.calculateDaysInMonth();
  // }

  updateCurrentMonthAndYear(offset: number) {
    const newMonth = this.currentMonth + offset;

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

  updateCurrentMonth(selectedMonth: number) {
    this.currentMonth = selectedMonth;
    this.calculateDaysInMonth();
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



}
