import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutMainComponent } from './appLayout/layout-main/layout-main.component';
import { LayoutAdminComponent } from './appLayout/layout-admin/layout-admin.component';
import { IndexComponent } from './main/index/index.component';
import { IntroComponent } from './main/intro/intro.component';
import { ProfileComponent } from './main/profile/profile.component';
import { TipsComponent } from './main/tips/tips.component';
import { NewsComponent } from './main/news/news.component';
import { HealthCardComponent } from './main/health-card/health-card.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      
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
      { path: 'HealthCard', component: HealthCardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
