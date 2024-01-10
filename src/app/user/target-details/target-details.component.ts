import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


import { BigExercisesService } from '../../../service/big-exercises/big-exercises.service';
import { ItargetData } from '../../../service/big-exercises/big-exercises-interface';
import { IExercise, IExercises } from '../../../service/exercise/exercise-interface';

export interface Category {
  name: string;
  color: string;
  quantity: number;
}


@Component({
  selector: 'app-target-details',
  templateUrl: './target-details.component.html',
  styleUrls: ['./target-details.component.css']
})



export class TargetDetailsComponent {
  targetData: ItargetData | null = null;
  categories: Category[] = [];
  viewCategories = "";
  constructor(
    private bigExerciseService: BigExercisesService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.loadBigExercise();
  }

  loadBigExercise() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bigExerciseService.getBigExerciseWithRelatedDataById(id).subscribe(
      (data) => {
        this.targetData = data;
        console.log(this.targetData);
        this.extractCategories();

      },
      (error) => {
        console.error('Error loading big exercise:', error);
      }
    );
  }

  extractCategories(): void {
    // const uniqueCategories: { [key: string]: string } = {};
    const categoryMap: { [key: string]: Category } = {};

    if (this.targetData) {
      this.targetData.exercises?.$values.forEach((exercise: any) => {
        const categoryName = exercise.categoryName;
        const defaultColor = exercise.defaultColor;
        if (!categoryMap[categoryName]) {
          categoryMap[categoryName] = { name: categoryName, color: defaultColor, quantity: 1 };
        } else {
          categoryMap[categoryName].quantity++;
        }
      });
    }
    this.categories = Object.values(categoryMap);
    console.log(this.categories);
  }


  selectCategory(name: string) {
    if (this.viewCategories == name) {
      this.viewCategories = ""
    }else{
      this.viewCategories = name
    }


  }

  navigateToExerciseDetails(exerciseId: number) {
    // Navigate to TargetDetails with the specified exercise ID
    this.router.navigate(['/user/exerciseDetail', exerciseId]);
  }

  // sortedExercises() {
  //   if (this.targetData.exercises && this.targetData.exercises.$values) {
  //     return this.targetData.exercises.$values.sort((a, b) => {
  //       return new Date(a.timeStart).getTime() - new Date(b.timeStart).getTime();
  //     });
  //   }
  //   return [];
  // }


}
