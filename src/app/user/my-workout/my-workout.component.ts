import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { MyWorkoutService } from '../../../service/my_Workout/my-workout.service';
import { IUser } from '../../../service/user/user-interface';
import { IPracticeTime } from '../../../service/practice-time/practice-time-interface';
import { IDayDetails , IMonthDetails } from '../../../service/workout-schedule/day-details-interface';

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

  dataColor: any = {
    id: 0,
    color: "#fffffff",
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
    this.UserInfo();
    // this.calculateDaysInMonth();
    // this.currentDateAsNumber();
    // console.log(this.Today);

  }

  onDateSelected(date: IDayDetails) {
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

  colorIDChange(colorID :number){
    this.colorId = colorID
    console.log(colorID + "colorID");
    
  }

  UserInfo() {
    this.userService.getUserInfo().subscribe(
      (userInfo) => {
        this.userInfo = userInfo;
        if (this.userInfo?.id !== undefined) {
          // console.log(this.userInfo?.id);
          // this.getpracticeTimesUserById(this.userInfo.id , this.currentMonth);
          // console.log(this.practiceTimes);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
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
