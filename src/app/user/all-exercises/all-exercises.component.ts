import { Component } from '@angular/core';
import { Router } from '@angular/router';



import { User, UserInterface, AddUserInformation } from '../../../service/user/user-interface';
import { UserService } from '../../../service/user/user-service.service';

import { ExerciseService } from '../../../service/exercise/exercise.service';
import { IExercise , IExercises} from '../../../service/exercise/exercise-interface';

@Component({
  selector: 'app-all-exercises',
  templateUrl: './all-exercises.component.html',
  styleUrls: ['./all-exercises.component.css']
})
export class AllExercisesComponent {
  userInfo: User | null = null;
  exercise: IExercise[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private exerciseService: ExerciseService,
    
  ) {
    
  }

  ngOnInit(): void {
    this.UserInfo();
    
    // console.log(this.Today);

  }

  UserInfo() {
    this.userService.getUserInfo().subscribe(
      (userInfo) => {
        this.userInfo = userInfo;
        if (this.userInfo?.id !== undefined) {
          // console.log(this.userInfo?.id);
          this.getpracticeTimesUserById(this.userInfo.id);
          console.log(this.exercise);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  getpracticeTimesUserById(id: number) {
    this.exerciseService.getExerciseByUserId(id).subscribe(
      {
        next: (response) => {
          // Xử lý dữ liệu sau khi nhận được từ API
          this.exercise = response.$values;
          console.log(this.exercise);
        },
        error: (error) => {
          console.error(error);
        }
      }
    );
  }

  navigateToExerciseDetails(exerciseId: number) {
    // Navigate to TargetDetails with the specified exercise ID
    this.router.navigate(['/user/exerciseDetail', exerciseId]);
  }

}
