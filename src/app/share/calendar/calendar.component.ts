import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';


import { MyWorkoutService } from '../../../service/my_Workout/my-workout.service';
import { IUser } from '../../../service/user/user-interface';
import { IPracticeTime } from '../../../service/practice-time/practice-time-interface';
import { IDayDetails, IMonthDetails } from '../../../service/workout-schedule/day-details-interface';

import { UserService } from '../../../service/user/user-service.service';
import { ColorPreferenceService } from '../../../service/color-preference/color-preference.service';
import { WorkoutScheduleService } from '../../../service/workout-schedule/workout-schedule.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  @Output() dateSelected = new EventEmitter<IDayDetails>();
  @Output() exerciseData = new EventEmitter<IPracticeTime[]>();
  @Input() monthDetails!: IMonthDetails;
  @Input() viewType: number = 0;
  @Input() colorId: number = 0;

  currentYear: number;
  currentMonth: number;

  userInfo: IUser | null = null;
  practiceTimes: IPracticeTime[] = [];

  daysOfWeek: string[] = ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
  currentDate: Date = new Date();

  // day: number = 0;
  weeks: IDayDetails[][];

  constructor(
    private router: Router,

    private myWorkoutService: MyWorkoutService,
    private userService: UserService,
    // private colorPreferenceService: ColorPreferenceService,
    private workoutScheduleService: WorkoutScheduleService,
  ) {
    this.practiceTimes;
    this.currentDate = new Date();
    this.currentYear = this.currentDate.getFullYear();
    this.currentMonth = this.currentDate.getMonth() + 1;
    this.weeks = [];
  }

  ngOnInit(): void {
    // this.UserInfo();
    // this.calculateDaysInMonth();
    console.log(this.monthDetails);

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('currentMonth changed:', this.currentMonth);
    this.currentMonth = this.monthDetails.currentMonth;
    this.currentYear = this.monthDetails.currentYear;

    if (this.currentMonth) {
      this.calculateDaysInMonth();
      // console.log("heheh");

    }

  }

  UserInfo() {
    this.userService.getUserInfo().subscribe(
      (userInfo) => {
        this.userInfo = userInfo;
        if (this.userInfo?.id !== undefined) {
          // console.log(this.userInfo?.id);
          this.getpracticeTimesUserById(this.userInfo.id, this.currentMonth);
          // console.log(this.practiceTimes);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  calculateDaysInMonth() {
    // const today = new Date();
    const result = this.workoutScheduleService.calculateDaysInMonth(this.currentYear, this.currentMonth);
    // Sử dụng result
    this.weeks = result;
    this.UserInfo()
  }

  selectDate(date: IDayDetails) {
    this.dateSelected.emit(date);
    console.log(date);

  }

  getpracticeTimesUserById(id: number, month: number) {
    this.myWorkoutService.getPracticeTimes(id, month).subscribe(
      {
        next: (response) => {
          // Xử lý dữ liệu sau khi nhận được từ API
          this.practiceTimes = response.$values;
          this.exerciseData.emit(response.$values);
          console.log(this.practiceTimes);
        },
        error: (error) => {
          console.error(error);
        }
      }
    );
  }

  exercise(day: IDayDetails) {
    const filteredExercise: IPracticeTime[] = [];
    // console.log("kkkkkkk");

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

  // onDateSelected(date: IDayDetails[]) {
  //   this.selectedDate = date;
  // }
}
