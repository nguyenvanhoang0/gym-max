import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BigExercisesService } from '../../../service/big-exercises/big-exercises.service';
import { exerciseInterface, bigExercises } from '../../../service/big-exercises/big-exercises-interface';
import { User } from '../../../service/user/user-interface';
import { UserService } from '../../../service/user/user-service.service';

@Component({
  selector: 'app-big-exercise-details',
  templateUrl: './big-exercise-details.component.html',
  styleUrls: ['./big-exercise-details.component.css']
})
export class BigExerciseDetailsComponent {
  exercise: exerciseInterface[] = [];
  exercises: exerciseInterface[] = [];
  myBigExercises: bigExercises | null = null;

  constructor(
    private bigExercisesService: BigExercisesService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.GetcreatedWorkoutsInterface(id);
    });
  }

  GetcreatedWorkoutsInterface(id: number) {
    this.bigExercisesService.getBigExerciseDetails(id).subscribe(
      (response) => {
        console.log(response);
        // Xử lý dữ liệu sau khi nhận được từ API
        this.myBigExercises = response;
        console.log(this.myBigExercises.exercises);
        this.exercises = this.myBigExercises.exercises;
        // this.exercises = this.exercises.$values
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
