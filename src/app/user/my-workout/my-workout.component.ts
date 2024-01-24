import { Component, OnInit } from '@angular/core';


import { IUser } from '../../../service/user/user-interface';
import { IPracticeTime } from '../../../service/practice-time/practice-time-interface';
import { IDayDetails , IMonthDetails } from '../../../service/workout-schedule/day-details-interface';
import { IUpdateColor } from '../../../service/color-preference/color-preference-interface';


@Component({
  selector: 'app-my-workout',
  templateUrl: './my-workout.component.html',
  styleUrls: ['./my-workout.component.css']
})
export class MyWorkoutComponent {
  userInfo: IUser | null = null;
  practiceTimes: IPracticeTime[] = [];

  colorId: number = 0;
  viewType: number = 0;

  dataColor: IUpdateColor = {
    id: 0,
    color: "",
  }

  fullscreenMode : string = '';

  selectedDate!: IDayDetails ;
  selectedMonth!: IMonthDetails;

  constructor(
    
  ) {
    this.practiceTimes;
    
  }

  ngOnInit(): void {
   

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

  ChangeToFullScreenMode(mode: string) {
    
      this.fullscreenMode =mode
  }

  

  
}
