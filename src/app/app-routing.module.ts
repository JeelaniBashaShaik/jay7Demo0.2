import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AuthGuard } from './core/auth.guard';

import { AppComponent }   from './app.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsHomeComponent } from './news-home/news-home.component';
import { MenuComponent } from './menu/menu.component';
import { WeatherComponent } from './weather/weather.component';
import { LinksComponent } from './links/links.component';
import { TranslateComponent } from './translate/translate.component';
import { FileComponent } from './file/file.component';

const appRoutes: Routes = [
  { path: '',redirectTo: '/home', pathMatch: 'full'},
  { path: 'login', component:LoginComponent},
  { path : 'file', component:FileComponent },
  { path: 'app', component: AppComponent ,canActivate: [AuthGuard]},
  { path: 'news',component: NewsComponent ,canActivate: [AuthGuard]},
  { path: 'home',component: HomeComponent ,canActivate: [AuthGuard],
  children:[
    { path: '',   component: MenuComponent ,canActivate:[AuthGuard]},
    { path: 'menu',   component: MenuComponent ,canActivate:[AuthGuard]},
    { path: 'newsHome',   component: NewsHomeComponent ,canActivate:[AuthGuard]},
    { path: 'weather',component: WeatherComponent, canActivate:[AuthGuard]},
    { path: 'translate', component:TranslateComponent, canActivate:[AuthGuard]},
    { path: 'links',component: LinksComponent, canActivate:[AuthGuard]}]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{useHash:true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}