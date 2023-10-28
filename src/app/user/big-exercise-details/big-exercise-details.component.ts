import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BigExercisesService } from '../../../service/big-exercises/big-exercises.service';
import { exerciseInterface, bigExercises, exercise } from '../../../service/big-exercises/big-exercises-interface'; // Thêm exercise vào đây
import { User } from '../../../service/user/user-interface';
import { UserService } from '../../../service/user/user-service.service';

@Component({
  selector: 'app-big-exercise-details',
  templateUrl: './big-exercise-details.component.html',
  styleUrls: ['./big-exercise-details.component.css']
})
export class BigExerciseDetailsComponent {
  exercise: exerciseInterface[] = [];
  exercises: exercise[] = []; // Sửa kiểu dữ liệu thành exercise[] ở đây
  myBigExercises: bigExercises | null = null;

  constructor(
    private bigExercisesService: BigExercisesService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

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

        // Khởi tạo mảng exercises rỗng
        this.exercises = [];

        this.myBigExercises.exercises.forEach((item) => {
          // const newDataS: exercise = {item.$values}      
          const newData: exerciseInterface = {
            $id: item.$id,
            $values: item.$values.map((subItem) => ({
              
              id: subItem.id,
              content: subItem.content,
              quantity: subItem.quantity,
              time: subItem.time,
              category: subItem.category,
              point: subItem.point,
              userId: subItem.userId,
              evaluate: subItem.evaluate
            }))
          };
          // this.exercises.push(newData);
        });

        console.log(this.exercises);
      },
      (error) => {
        console.error(error);
      }
    );
}

}
