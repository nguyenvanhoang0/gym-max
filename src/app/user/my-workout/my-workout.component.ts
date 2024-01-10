import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { MyWorkoutService } from '../../../service/my_Workout/my-workout.service';
import { IUser } from '../../../service/user/user-interface';
import { IPracticeTime } from '../../../service/practice-time/practice-time-interface';
import { IDayDetails } from '../../../service/workout-schedule/day-details-interface';

import { UserService } from '../../../service/user/user-service.service';
import { ColorPreferenceService } from '../../../service/color-preference/color-preference.service';
import { WorkoutScheduleService } from '../../../service/workout-schedule/workout-schedule.service';

@Component({
  selector: 'app-my-workout',
  templateUrl: './my-workout.component.html',
  styleUrls: ['./my-workout.component.css']
})
export class MyWorkoutComponent {
  userInfo: IUser | null = null;
  practiceTimes: IPracticeTime[] = [];

  daysOfWeek: string[] = ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
  currentDate: Date = new Date();

  day: number = 0;
  weeks: IDayDetails[][];
  currentYear: number;
  currentMonth: number;
  years: number[] = this.generateYears(10);
  months: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  Today = new Date();

  colorId: number = 0;
  viewType: number = 0;

  dataColor: any = {
    id: 0,
    color: "#fffffff",
  }

  constructor(
    private router: Router,

    private myWorkoutService: MyWorkoutService,
    private userService: UserService,
    private colorPreferenceService: ColorPreferenceService,
    private workoutScheduleService: WorkoutScheduleService,
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
    this.currentDateAsNumber();
    // console.log(this.Today);

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
    this.day = 0;
  }

  getpracticeTimesUserById(id: number) {
    this.myWorkoutService.getPracticeTimes(id).subscribe(
      {
        next: (response) => {
          // Xử lý dữ liệu sau khi nhận được từ API
          this.practiceTimes = response.$values;
          console.log(1);
        },
        error: (error) => {
          console.error(error);
        }
      }
    );
  }

  exercise(day: IDayDetails) {
    const filteredExercise: IPracticeTime[] = [];

    this.practiceTimes.forEach((practiceTime) => {
      // const formattedDay = formatDay(day.day);
      const practiceTimeDay = new Date(practiceTime.timeStart).getDate();
      const practiceTimeMonth = new Date(practiceTime.timeStart).getMonth() + 1; // Tháng bắt đầu từ 0
      const practiceTimeYear = new Date(practiceTime.timeStart).getFullYear();
      if (this.viewType == 0) {
        if (this.colorId == 0) {
          if (
            day.day === practiceTimeDay && day.month === practiceTimeMonth && day.year === practiceTimeYear
          ) {
            filteredExercise.push(practiceTime);
          }
        } else {
          if (
            day.day === practiceTimeDay &&
            day.month === practiceTimeMonth &&
            day.year === practiceTimeYear &&
            this.colorId == practiceTime.myWorkoutId
          ) {
            filteredExercise.push(practiceTime);
          }
        }
      } else {
        if (this.colorId == 0) {
          if (
            day.day === practiceTimeDay &&
            day.month === practiceTimeMonth &&
            day.year === practiceTimeYear
          ) {
            filteredExercise.push(practiceTime);
          }
        } else {
          if (
            day.day === practiceTimeDay &&
            day.month === practiceTimeMonth &&
            day.year === practiceTimeYear &&
            this.colorId == practiceTime.categoryId
          ) {
            filteredExercise.push(practiceTime);
          }
        }
      }

    });

    // Kết quả sau khi lọc được lưu trong filteredExercise
    // console.log(filteredExercise);
    // console.log(0);
    return filteredExercise;
  }

  clickDay(day: number, month: number, year: number) {
    if (this.userInfo) {
      const id = this.userInfo.id;
      if (id) {
        const selectedDate = new Date(year + `-` + month + `-` + day);
        console.log(2);

        const formattedDate = new Date(this.formatDate(selectedDate));

        console.log(2);


        this.myWorkoutService.getPracticeTimesByTimeStart(id, formattedDate).subscribe(
          (response) => {
            this.practiceTimes = response.$values;
            console.log(2);
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

  clickNote(colorId: number) {
    if (this.colorId == colorId) {
      this.colorId = 0;

    } else {
      this.colorId = colorId
    }
    // this.UserInfo()
  }

  clickviewType(viewType: number) {
    this.viewType = viewType
    this.colorId = 0;

    // this.UserInfo()

  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  calculateDaysInMonth() {
    // const today = new Date();
    const result = this.workoutScheduleService.calculateDaysInMonth(this.currentYear, this.currentMonth);
    // Sử dụng result
    this.weeks = result;
  }

  updateCurrentYear(currentYear: number) {
    this.currentYear = currentYear;
    console.log(3);

    this.calculateDaysInMonth();
  }

  updateCurrentMonth(selectedMonth: number) {
    this.currentMonth = selectedMonth;
    this.calculateDaysInMonth();
  }

  updateCurrentMonthAndYear(offset: number) {
    const newMonth = this.currentMonth + offset;
  
    if (newMonth === 0 || newMonth === 13) {
      this.currentMonth = newMonth === 0 ? 12 : 1;
      this.currentYear += offset > 0 ? 1 : -1;
    } else {
      this.currentMonth = newMonth;
    }
  
    console.log(4);
  
    this.weeks = [];
    this.calculateDaysInMonth();
  }
  

  updateCurrentDayAndMonthAndYear(offset: number) {
    let day = this.day + offset;
  
    if (day === 0 || day === this.getDaysInMonth(this.currentYear, this.currentMonth - 1) + 1) {
      const newMonth = day === 0 ? this.currentMonth - 1 : this.currentMonth + 1;
      const newYear = newMonth === 0 ? this.currentYear - 1 : newMonth === 13 ? this.currentYear + 1 : this.currentYear;
  
      this.currentMonth = newMonth === 0 ? 12 : newMonth === 13 ? 1 : newMonth;
      this.currentYear = newYear;
  
      day = day === 0 ? this.getDaysInMonth(this.currentYear, this.currentMonth) : 1;
      this.day = day;
    } else {
      this.currentMonth = this.currentMonth;
    }
  
    this.calculateDaysInMonth();
    this.clickDay(day, this.currentMonth, this.currentYear);
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

  currentDateAsNumber() {
    this.currentMonth = this.currentDate.getMonth() + 1;
    this.currentYear = this.currentDate.getFullYear();
    const currentDay = this.currentDate.getDate();
    this.clickDay(currentDay, this.currentMonth, this.currentYear)
    // console.log(currentDay);

  }

  getDayClass(status: string) {
    // console.log(`${status}-day`);
    return `${status}_day`;
  }

  getUniqueColors(): { id: number; color: string; content: string }[] {
    const uniqueIdsWithColors: { id: number; color: string; content: string }[] = [];

    this.practiceTimes.forEach((practiceTime) => {
      let existingId: { id: number; color: string; content: string } | undefined;

      if (this.viewType === 0) {
        existingId = uniqueIdsWithColors.find((item) => item.id === practiceTime.myWorkoutId);
        // console.log(practiceTime.myWorkoutId);

      } else {
        existingId = uniqueIdsWithColors.find((item) => item.id === practiceTime.categoryId);
      }

      if (!existingId) {
        if (this.viewType === 0) {
          uniqueIdsWithColors.push({
            id: practiceTime.myWorkoutId,
            color: practiceTime.defaultColor,
            content: practiceTime.target
          });
        } else {
          uniqueIdsWithColors.push({
            id: practiceTime.categoryId,
            color: practiceTime.categoryColor,
            content: practiceTime.categoryName
          });
        }
      } else {
        // If the existingId already exists, update the color and content
        existingId.color = this.viewType === 0 ? practiceTime.defaultColor : practiceTime.categoryColor;
        existingId.content = this.viewType === 0 ? practiceTime.target : practiceTime.categoryName;
      }
    });
    console.log(5);

    return uniqueIdsWithColors;
  }

  updateColor() {
    if (this.viewType == 0) {
      this.myWorkoutService.updateMyWorkout(this.dataColor.color, this.dataColor.id).subscribe(
        () => {
          console.log('Color updated successfully');
          // this.dataColor.color = ""
          this.dataColor.id = 0
          console.log(this.dataColor);
          this.UserInfo()
        },
        (response) => {
          console.error('Error updating color:', response);
        }
      );
    } else {
      this.colorPreferenceService.updatecolorPreferen(this.dataColor.color, this.dataColor.id).subscribe(
        () => {
          console.log('colorPreferen updated successfully');
          // this.dataColor.color = ""
          this.dataColor.id = 0
          console.log(this.dataColor);
          this.UserInfo()
          // Thêm bất kỳ logic hoặc chuyển hướng bổ sung nào ở đây
        },
        (response) => {
          console.error('Error updating color:', response);
        }
      );
    }

  }

  dataupdateColor(id: number, color: string) {
    this.dataColor.id = id,
      this.dataColor.color = color
    console.log(6);
    // this.updateColor()
  }

  closeTheForm() {
    this.dataColor.id = 0
  }

  blockFormClosing(event: Event) {
    event.stopPropagation();

  }

  navigateToExerciseDetails(exerciseId: number) {
    // Navigate to TargetDetails with the specified exercise ID
    this.router.navigate(['/user/exerciseDetail', exerciseId]);
  }

}
