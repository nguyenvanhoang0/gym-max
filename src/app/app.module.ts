import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule, JwtHelperService ,} from '@auth0/angular-jwt';
// import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HearderMainComponent } from './appLayout/hearder-main/hearder-main.component';
import { FooterMainComponent } from './appLayout/footer-main/footer-main.component';
import { LayoutMainComponent } from './appLayout/layout-main/layout-main.component';
import { LayoutAdminComponent } from './appLayout/layout-admin/layout-admin.component';
import { HearderAdminComponent } from './appLayout/hearder-admin/hearder-admin.component';
import { MenuAdminComponent } from './appLayout/menu-admin/menu-admin.component';
import { IndexComponent } from './main/index/index.component';
import { IntroComponent } from './main/intro/intro.component';
import { ProfileComponent } from './main/profile/profile.component';
import { TipsComponent } from './main/tips/tips.component';
import { NewsComponent } from './main/news/news.component';
import { HealthCardComponent } from './main/health-card/health-card.component';
import { CreateExerciseComponent } from './main/create-exercise/create-exercise.component';
import { LoginRegisterComponent } from './login_register/login-register/login-register.component';
// import { MenuUserComponent } from './appLayout/menu-user/menu-user.component';
import { SidebarUserComponent } from './appLayout/sidebar-user/sidebar-user.component';
import { LayoutUserComponent } from './appLayout/layout-user/layout-user.component';
import { HearderUserComponent } from './appLayout/hearder-user/hearder-user.component';
import { MyWorkoutComponent } from './user/my-workout/my-workout.component';
import { CreatedExercisesComponent } from './user/created-exercises/created-exercises.component';
import { CreateExercisesComponent } from './user/create-exercises/create-exercises.component';
import { AllExercisesComponent } from './user/all-exercises/all-exercises.component';
import { ExerciseContentComponent } from './user/exercise-content/exercise-content.component';
import { BigExerciseDetailsComponent } from './user/big-exercise-details/big-exercise-details.component';
import { ExerciseDetailsComponent } from './user/exercise-details/exercise-details.component';
import { IsolationExercisesComponent } from './user/isolation-exercises/isolation-exercises.component';
import { CommunityLibraryComponent } from './user/community-library/community-library.component';

@NgModule({
  declarations: [
    AppComponent,
    HearderMainComponent,
    FooterMainComponent,
    LayoutMainComponent,
    LayoutAdminComponent,
    HearderAdminComponent,
    MenuAdminComponent,
    IndexComponent,
    IntroComponent,
    ProfileComponent,
    TipsComponent,
    NewsComponent,
    HealthCardComponent,
    CreateExerciseComponent,
    LoginRegisterComponent,
    // MenuUserComponent,
    SidebarUserComponent,
    LayoutUserComponent,
    HearderUserComponent,
    MyWorkoutComponent,
    CreatedExercisesComponent,
    CreateExercisesComponent,
    AllExercisesComponent,
    ExerciseContentComponent,
    BigExerciseDetailsComponent,
    ExerciseDetailsComponent,
    IsolationExercisesComponent,
    CommunityLibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    JwtModule,
    // CommonModule,
    // JwtHelperModule
  ],
  exports: [
    // ...
    HearderUserComponent, // Đảm bảo đã thêm component vào đây
  ],
  providers: [JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
