import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { MyWorkoutService } from '../../../service/my_Workout/my-workout.service';
import { IUser } from '../../../service/user/user-interface';
import { IPracticeTime } from '../../../service/practice-time/practice-time-interface';
import { IDayDetails , IMonthDetails } from '../../../service/workout-schedule/day-details-interface';
import { IUpdateColor } from '../../../service/color-preference/color-preference-interface';

import { UserService } from '../../../service/user/user-service.service';
import { ColorPreferenceService } from '../../../service/color-preference/color-preference.service';
// import { WorkoutScheduleService } from '../../../service/workout-schedule/workout-schedule.service';

@Component({
  selector: 'app-my-workout',
  templateUrl: './my-workout.component.html',
  styleUrls: ['./my-workout.component.css']
})
export class MyWorkoutComponent {
  userInfo: IUser | null = null;
  practiceTimes: IPracticeTime[] = [];

  // daysOfWeek: string[] = ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
  // currentDate: Date = new Date();

  // day: number = 0;
  // weeks: IDayDetails[][];
  // currentYear: number ;
  // currentMonth: number;
  // years: number[] = this.generateYears(10);
  // months: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  // Today = new Date();  

  colorId: number = 0;
  viewType: number = 0;

  dataColor: IUpdateColor = {
    id: 0,
    color: "",
  }

  selectedDate!: IDayDetails ;
  selectedMonth!: IMonthDetails;

  constructor(
    private router: Router,

    private myWorkoutService: MyWorkoutService,
    private userService: UserService,
    private colorPreferenceService: ColorPreferenceService,
    // private workoutScheduleService: WorkoutScheduleService,
  ) {
    this.practiceTimes;
    // this.currentDate = new Date();
    // this.currentYear = this.currentDate.getFullYear();
    // this.currentMonth = this.currentDate.getMonth() + 1;
    // this.weeks = [];
  }

  ngOnInit(): void {
    // this.UserInfo();
    // this.calculateDaysInMonth();
    // this.currentDateAsNumber();
    // console.log(this.Today);

  }

  onDateSelected(date: IDayDetails) {
    this.selectedDate = date;
    console.log(this.selectedDate);
    
  }

  changeTheSelectedDate(date: IDayDetails) {
    this.selectedDate = date;
  }

  updateCurrentMonthAndYear_2(month: IMonthDetails) {
    this.selectedMonth = month;
  }

  getExerciseData(month: IPracticeTime[]) {
    this.practiceTimes = month;
  }

  viewTypeChange(viewType: number) {
    this.viewType = viewType
    // this.colorId = 0;
    // this.UserInfo()
  }

  colorIDChange(colorID : IUpdateColor){
    this.dataColor = colorID
    console.log(this.dataColor);
    
    console.log(colorID + "colorID");
    
  }

  

  navigateToExerciseDetails(exerciseId: number) {
    // Navigate to TargetDetails with the specified exercise ID
    this.router.navigate(['/user/exerciseDetail', exerciseId]);
  }

}
