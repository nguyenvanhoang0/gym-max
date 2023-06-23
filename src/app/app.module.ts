import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
