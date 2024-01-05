import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BigExercisesService } from '../../../service/big-exercises/big-exercises.service';
import { targetData } from '../../../service/big-exercises/big-exercises-interface';
import { IExercise, IExercises } from '../../../service/exercise/exercise-interface';
@Component({
  selector: 'app-target-details',
  templateUrl: './target-details.component.html',
  styleUrls: ['./target-details.component.css']
})
export class TargetDetailsComponent {
  targetData: targetData | null = null;


  constructor(
    private bigExerciseService: BigExercisesService,
    // private userService: UserService,
    private route: ActivatedRoute
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
        
      },
      (error) => {
        console.error('Error loading big exercise:', error);
      }
    );
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
