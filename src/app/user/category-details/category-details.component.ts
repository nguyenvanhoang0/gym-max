import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


import { GeneralGenreDetails } from '../../../service/general_genre/general-genre-interface';
import { GeneralGenreService } from '../../../service/general_genre/general-genre.service';
import { IExercise, IExercises ,IExerciseDetails } from '../../../service/exercise/exercise-interface';
@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {
  GeneralGenreData: GeneralGenreDetails | null = null;
  // categories: Category[] = [];
  // viewCategories = "";

  constructor(
    private generalGenreService: GeneralGenreService,
    // private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.loadBigExercise();
  }

  loadBigExercise() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.generalGenreService.GetGeneralCategoryDetailsById(id).subscribe(
      (data) => {
        this.GeneralGenreData = data;
        console.log(this.GeneralGenreData);
        // this.extractCategories();

      },
      (error) => {
        console.error('Error loading big exercise:', error);
      }
    );
  }
}
