import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


import { ExerciseService } from '../../../service/exercise/exercise.service';
import { targetData } from '../../../service/big-exercises/big-exercises-interface';
import { IExercise, IExercises ,IExerciseDetails } from '../../../service/exercise/exercise-interface';
@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css']
})
export class ExerciseDetailsComponent {
  exerciseData: IExerciseDetails | null = null;
  // categories: Category[] = [];
  // viewCategories = "";

  constructor(
    private exerciseService: ExerciseService,
    // private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.loadBigExercise();
  }

  loadBigExercise() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.exerciseService.getExerciseById(id).subscribe(
      (data) => {
        this.exerciseData = data;
        console.log(this.exerciseData);
        // this.extractCategories();

      },
      (error) => {
        console.error('Error loading big exercise:', error);
      }
    );
  }

  navigateToTargetDetails(exerciseId: number) {
    // Navigate to TargetDetails with the specified exercise ID
    this.router.navigate(['/user/TargetDetails', exerciseId]);
  }
}
