import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from '../../../service/Category/category.service';
import { CategoryInterface } from '../../../service/Category/category-interface';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories: CategoryInterface[] = [];

  constructor(
    private categoryService: CategoryService,
    // private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.loadcategories();
  }

  loadcategories() {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    this.categoryService.getCategory().subscribe(
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
}
