import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryInterface } from '../../../service/Category/category-interface';
import { CategoryService } from '../../../service/Category/category.service';

import { ExerciseInterface } from '../../../service/exercise/exercise-interface';
import { ExerciseService } from '../../../service/exercise/exercise.service';

import { UserService } from '../../../service/user/user-service.service';
import { User } from '../../../service/user/user-interface';


@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.css']
})
export class CreateExerciseComponent {
  categorys: CategoryInterface[] = [];
  userInfo: User | null = null;
  exerciseData = {
    name: 'Tên bài tập',
    description: 'Mô tả bài tập',
    point: 100,
    categoryId: 1
  };



  constructor(
    private categoryService: CategoryService,
    private exerciseService: ExerciseService,
    // private igExerciseGeneralGenreService: BigExerciseGeneralGenreService,
    private userService: UserService,
    private router: Router
    // private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getallCategory();
    // this.calculateDaysInMonth();
  }


  getallCategory() {
    this.categoryService.getCategory().subscribe(
      (allCategory) => {
        this.categorys = allCategory.$values;
        console.log(this.categorys);
      })
  }

  selectCategory(categoryId: number) {
    this.exerciseData.categoryId = categoryId;
    console.log(this.exerciseData);
    
  }

  onSubmit() {
    this.userService.getUserInfo().subscribe(
      (userInfo) => {
        this.userInfo = userInfo;
        if (this.userInfo?.id !== undefined) {
          const userId = this.userInfo.id;
          this.exerciseService.createExercise({ ...this.exerciseData, userId }).subscribe(
            (response) => {
              console.log('Dữ liệu đã được gửi lên API thành công:', response);
              
            },
            (error) => {
              console.error('Lỗi khi gửi dữ liệu lên API:', error);
            }
          );
        }
      },
    )
  }
}
