import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GeneralGenreService } from '../../../service/general_genre/general-genre.service';
import { IGeneralGenreInterface } from '../../../service/general_genre/general-genre-interface';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories: IGeneralGenreInterface[] = [];

  constructor(
    private generalGenreService: GeneralGenreService,
    // private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.loadcategories();
  }

  loadcategories() {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    this.generalGenreService.getGeneralGenre().subscribe(
      (data) => {
        this.categories = data.$values;
        console.log(this.categories);
        // this.extractCategories();

      },
      (error) => {
        console.error('Error loading big exercise:', error);
      }
    );
  }

  navigateToCategoryDetails(exerciseId: number) {
    // Navigate to TargetDetails with the specified exercise ID
    this.router.navigate(['/user/categoryDetails', exerciseId]);
  }
}
