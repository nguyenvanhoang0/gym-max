import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutMainComponent } from './appLayout/layout-main/layout-main.component';
import { LayoutAdminComponent } from './appLayout/layout-admin/layout-admin.component';
import { LayoutUserComponent } from './appLayout/layout-user/layout-user.component';

import { LoginRegisterComponent } from './login_register/login-register/login-register.component';

import { IndexComponent } from './main/index/index.component';
import { IntroComponent } from './main/intro/intro.component';
import { ProfileComponent } from './main/profile/profile.component';
import { TipsComponent } from './main/tips/tips.component';
import { NewsComponent } from './main/news/news.component';
import { HealthCardComponent } from './main/health-card/health-card.component';

import { CreateExerciseComponent } from './user/create-exercise/create-exercise.component';

import { MyWorkoutComponent } from './user/my-workout/my-workout.component';
import { AllExercisesComponent } from './user/all-exercises/all-exercises.component';
import { CreatedExercisesComponent } from './user/created-exercises/created-exercises.component';
import { CreateExercisesComponent } from './user/create-exercises/create-exercises.component';
import { CreateTargetComponent } from './user/create-target/create-target.component';
import { ExerciseContentComponent } from './user/exercise-content/exercise-content.component';

import { BigExerciseDetailsComponent } from './user/big-exercise-details/big-exercise-details.component';
import { ExerciseDetailsComponent } from './user/exercise-details/exercise-details.component';
import { CategoryDetailsComponent } from './user/category-details/category-details.component';


import { IsolationExercisesComponent } from './user/isolation-exercises/isolation-exercises.component';
import { CommunityLibraryComponent } from './user/community-library/community-library.component';
import { TargetDetailsComponent } from './user/target-details/target-details.component';
import { CategoryListComponent } from './user/category-list/category-list.component';


const routes: Routes = [
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      
    ]
  },

  {
    path: 'login',
    component: LoginRegisterComponent,
  },

  {
    path: 'healthCard',
    component: HealthCardComponent,
  },

  {
    path: 'user',
    component: LayoutUserComponent,
    children: [
      { path: 'myWorkout', component: MyWorkoutComponent },
      { path: 'allExercises', component: AllExercisesComponent },
      { path: 'createdExercises', component: CreatedExercisesComponent },
      { path: 'createExercises', component: CreateExercisesComponent },
      { path: 'createTarget', component: CreateTargetComponent },
      { path: 'isolationExercises', component: IsolationExercisesComponent },
      { path: 'exerciseContent', component: ExerciseContentComponent },
      { path: 'communityLibrary', component: CommunityLibraryComponent },
      { path: 'categoryList', component: CategoryListComponent },

      { path: 'bigExerciseDetail/:id', component: BigExerciseDetailsComponent },
      { path: 'TargetDetails/:id', component: TargetDetailsComponent },
      { path: 'exerciseDetail/:id', component: ExerciseDetailsComponent },
      { path: 'categoryDetails/:id', component: CategoryDetailsComponent },
      
      { path: 'createExercise', component: CreateExerciseComponent },

    ]
  },

  {
    path: 'main',
    component: LayoutMainComponent,
    children: [
      { path: 'home', component: IndexComponent },
      { path: 'intro', component: IntroComponent },
      { path: 'news', component: NewsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'tips', component: TipsComponent },
      // { path: 'healthCard', component: HealthCardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
