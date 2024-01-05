import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BigExercisesService } from '../../../service/big-exercises/big-exercises.service';
import { bigExercises } from '../../../service/big-exercises/big-exercises-interface';
import { IExercise , IExercises } from '../../../service/exercise/exercise-interface';
 // Thêm exercise vào đây
import { User } from '../../../service/user/user-interface';
import { UserService } from '../../../service/user/user-service.service';

@Component({
  selector: 'app-big-exercise-details',
  templateUrl: './big-exercise-details.component.html',
  styleUrls: ['./big-exercise-details.component.css']
})
export class BigExerciseDetailsComponent {
//   exercise: IExercise[] = [];
//   exercises: IExercises[] = []; // Sửa kiểu dữ liệu thành exercise[] ở đây
//   myBigExercises: bigExercises | null = null;

//   constructor(
//     private bigExercisesService: BigExercisesService,
//     private userService: UserService,
//     private route: ActivatedRoute
//   ) { }

//   ngOnInit(): void {
//     this.route.params.subscribe((params) => {
//       const id = params['id'];
//       this.GetcreatedWorkoutsInterface(id);
//     });
//   }

//   GetcreatedWorkoutsInterface(id: number) {
//     this.bigExercisesService.getBigExerciseDetails(id).subscribe(
//       (response) => {
//         console.log(response);
//         // Xử lý dữ liệu sau khi nhận được từ API
//         this.myBigExercises = response;
//         console.log(this.myBigExercises.exercises);

//         // Khởi tạo mảng exercises rỗng
//         this.exercises = [];

//         this.myBigExercises.exercises.forEach((item) => {
//           // const newDataS: exercise = {item.$values}      
//           const newData: IExercises = {
//             $id: item.$id,
//             $values: {
//               ...item.$values,
//             },
//           };
//           // this.exercises.push(newData);
//         });

//         console.log(this.exercises);
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
// }

}
