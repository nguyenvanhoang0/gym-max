import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';


import { IUser } from '../../../service/user/user-interface';
import { IPracticeTime } from '../../../service/practice-time/practice-time-interface';
import { IDayDetails, IMonthDetails } from '../../../service/workout-schedule/day-details-interface';
import { IUpdateColor } from '../../../service/color-preference/color-preference-interface';

import { MyWorkoutService } from '../../../service/my_Workout/my-workout.service';
import { UserService } from '../../../service/user/user-service.service';
import { ColorPreferenceService } from '../../../service/color-preference/color-preference.service';
import { WorkoutScheduleService } from '../../../service/workout-schedule/workout-schedule.service';

@Component({
  selector: 'app-color-update-form',
  templateUrl: './color-update-form.component.html',
  styleUrls: ['./color-update-form.component.css']
})
export class ColorUpdateFormComponent {
  @Input() viewType: number = 0;
  // @Input() colorId: number = 0;


  @Input() dataColor: IUpdateColor = {
    id: 0,
    color: "#fffffff",
  }

  userInfo: IUser | null = null;

  constructor(
    private router: Router,

    private myWorkoutService: MyWorkoutService,
    private userService: UserService,
    private colorPreferenceService: ColorPreferenceService,
    private workoutScheduleService: WorkoutScheduleService,
  ) {
    
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
      this.myWorkoutService.updateMyWorkout(this.dataColor).subscribe(
        () => {
          console.log('Color updated successfully');
          // this.dataColor.color = ""
          this.dataColor.color = ""
          console.log(this.dataColor);
          // this.UserInfo()
        },
        (response) => {
          console.error('Error updating color:', response);
        }
      );
    } else {
      this.colorPreferenceService.updatecolorPreferen(this.dataColor).subscribe(
        () => {
          console.log('colorPreferen updated successfully');
          // this.dataColor.color = ""
          this.dataColor.color = ""
          console.log(this.dataColor);
          // this.UserInfo()
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
    this.dataColor.color = ""
  }

  blockFormClosing(event: Event) {
    event.stopPropagation();

  }
}
