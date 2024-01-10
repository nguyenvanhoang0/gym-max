import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { MyWorkoutService } from '../../../service/my_Workout/my-workout.service';
import { IUser, UserInterface } from '../../../service/user/user-interface';
import { UserService } from '../../../service/user/user-service.service';
import { IMonthlyData, IMyWorkoutData } from '../../../service/my_Workout/my-workout-interface';

@Component({
  selector: 'app-exercise-content',
  templateUrl: './exercise-content.component.html',
  styleUrls: ['./exercise-content.component.css']
})
export class ExerciseContentComponent implements OnInit {
  userInfo: IUser | null = null;
  myBigExercises: IMyWorkoutData[] = [];
  bigExercisesMonthlyData: { [key: string]: IMonthlyData[] } = {};

  constructor(
    private myWorkoutService: MyWorkoutService,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    this.userService.getUserInfo().subscribe(
      (userInfo) => {
        this.userInfo = userInfo;
        if (this.userInfo?.id !== undefined) {
          this.getBigExerciseInMyWorkoutsByUserId(this.userInfo.id);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  getBigExerciseInMyWorkoutsByUserId(id: number) {
    this.myWorkoutService.GetBigExerciseInMyWorkoutsByUserId(id).subscribe(
      (response) => {
        this.myBigExercises = response.$values;

        this.myBigExercises.forEach((item) => {
          const timeStart = new Date(item.timeStart);
          const year = timeStart.getFullYear();
          const month = timeStart.getMonth() + 1;
          const day = timeStart.getDate();
          const modifiedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
          const monthKey = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

          if (!this.bigExercisesMonthlyData[monthKey]) {
            this.bigExercisesMonthlyData[monthKey] = [];
          }

          const newData: IMonthlyData = {
            id: item.id,
            timeStart: modifiedDate,
            bigExercise: {
              ...item.bigExercise,
            },
          };

          this.bigExercisesMonthlyData[monthKey].push(newData);
        });

        console.log(this.bigExercisesMonthlyData);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  navigateToTargetDetails(exerciseId: number) {
    // Navigate to TargetDetails with the specified exercise ID
    this.router.navigate(['/user/TargetDetails', exerciseId]);
  }
  
}
