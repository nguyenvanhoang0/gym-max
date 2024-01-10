import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BigExercisesService } from '../../../service/big-exercises/big-exercises.service';
import { IbigExercisesByAuthor } from '../../../service/big-exercises/big-exercises-interface';
import { IUser } from '../../../service/user/user-interface';
import { UserService } from '../../../service/user/user-service.service';
@Component({
  selector: 'app-created-exercises',
  templateUrl: './created-exercises.component.html',
  styleUrls: ['./created-exercises.component.css']
})
export class CreatedExercisesComponent {
  userInfo: IUser | null = null;
  myBigExercises: IbigExercisesByAuthor["$values"] = [];

  constructor(
    private bigExercisesService: BigExercisesService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.UserInfo();
    // this.calculateDaysInMonth();
  }


  UserInfo() {
    this.userService.getUserInfo().subscribe(
      (userInfo) => {
        this.userInfo = userInfo;
        if (this.userInfo?.id !== undefined) {
          // console.log(this.userInfo?.id);
          this.GetcreatedWorkoutsInterface(this.userInfo.id);
          console.log(this.myBigExercises);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  GetcreatedWorkoutsInterface(userId: number) {
    this.bigExercisesService.getcreatedWorkouts(userId).subscribe(
      (response) => {
        // Xử lý dữ liệu sau khi nhận được từ API
        this.myBigExercises = response.$values;
        console.log(this.myBigExercises);
      },
      (error) => {
        console.error(error);
      }
    )
  }

  navigateToBigExerciseDetails(id: number): void {
    this.router.navigate(['/user/TargetDetails/', id]);
  }
}


