import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BigExercisesService } from '../../../service/big-exercises/big-exercises.service';
import { createdWorkoutsInterface, bigExercises , bigExercisesByAuthor } from '../../../service/big-exercises/big-exercises-interface';
import { User, UserInterface, AddUserInformation } from '../../../service/user/user-interface';
import { UserService } from '../../../service/user/user-service.service';
@Component({
  selector: 'app-community-library',
  templateUrl: './community-library.component.html',
  styleUrls: ['./community-library.component.css']
})
export class CommunityLibraryComponent {
  userInfo: User | null = null;
  myBigExercises: bigExercisesByAuthor["$values"] = [];
  test: [] = [];


  constructor(
    private bigExercisesService: BigExercisesService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.GetAllPublicBigExercises();
    // this.calculateDaysInMonth();
  }

  GetAllPublicBigExercises() {
    this.bigExercisesService.GetAllPublicBigExercises().subscribe(
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
}
