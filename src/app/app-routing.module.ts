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
import { CreateExerciseComponent } from './main/create-exercise/create-exercise.component';

import { MyWorkoutComponent } from './user/my-workout/my-workout.component';
import { AllExercisesComponent } from './user/all-exercises/all-exercises.component';
import { CreatedExercisesComponent } from './user/created-exercises/created-exercises.component';
import { CreateExercisesComponent } from './user/create-exercises/create-exercises.component';

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
      { path: 'healthCard', component: HealthCardComponent },
      { path: 'createExercise', component: CreateExerciseComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
