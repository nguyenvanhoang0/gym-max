import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';

import { BigExercisesService } from '../../../service/big-exercises/big-exercises.service';
import { createdWorkoutsInterface, bigExercises , bigExercisesByAuthor } from '../../../service/big-exercises/big-exercises-interface';
import { User, UserInterface, AddUserInformation } from '../../../service/user/user-interface';
import { UserService } from '../../../service/user/user-service.service';
@Component({
  selector: 'app-community-library',
  templateUrl: './community-library.component.html',
  styleUrls: ['./community-library.component.css']
})
export class CommunityLibraryComponent {
  userInfo: User | null = null;
  myBigExercises: bigExercisesByAuthor["$values"] = [];
  test: [] = [];

  // page: number = 1;
  // count: number = 0;
  // tableSize: number = 7;
  // tableSizes: any = [3, 6, 9, 12];
  itemsPerPage: number = 10; // Số mục trên mỗi trang
  currentPage: number = 1;

  
  constructor(
    private bigExercisesService: BigExercisesService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.GetAllPublicBigExercises();
  }

  GetAllPublicBigExercises() {
    this.bigExercisesService.GetAllPublicBigExercises().subscribe(
      (response) => {
        this.myBigExercises = response.$values;
        console.log(this.myBigExercises);
      },
      (error) => {
        console.error(error);
      }
    )
  }

  
  
  onPageChange(event: any) {

    this.router.navigate([], {
      queryParams: { page: event },
      queryParamsHandling: 'merge',
    });
  }
}
