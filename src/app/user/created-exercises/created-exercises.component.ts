import { Component } from '@angular/core';

import { BigExercisesService } from '../../../service/big-exercises/big-exercises.service';
import { createdWorkoutsInterface , BigExercises} from '../../../service/big-exercises/big-exercises-interface';
import { User, UserInterface, AddUserInformation } from '../../../service/user/user-interface';
import { UserService } from '../../../service/user/user-service.service';
@Component({
  selector: 'app-created-exercises',
  templateUrl: './created-exercises.component.html',
  styleUrls: ['./created-exercises.component.css']
})
export class CreatedExercisesComponent {
  userInfo: User | null = null;
  myBigExercises : BigExercises[] = [];

  constructor(
    private bigExercisesService: BigExercisesService,
    private userService: UserService,
  ) {}

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

  GetcreatedWorkoutsInterface(id: number) {
    this.bigExercisesService.getcreatedWorkouts(id).subscribe(
      (response) => {
        // Xử lý dữ liệu sau khi nhận được từ API
        this.myBigExercises = response.$values;
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
