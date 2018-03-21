import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AuthGuard } from './core/auth.guard';

import { AppComponent }   from './app.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsHomeComponent } from './news-home/news-home.component';
import { MenuComponent } from './menu/menu.component';


const appRoutes: Routes = [
  { path: '',redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component:LoginComponent},
  { path: 'app', component: AppComponent ,canActivate: [AuthGuard]},
  { path: 'news',component: NewsComponent ,canActivate: [AuthGuard]},
  { path: 'home',component: HomeComponent ,canActivate: [AuthGuard],
  children:[
    { path: '',   component: MenuComponent ,canActivate:[AuthGuard]},
    { path: 'menu',   component: MenuComponent ,canActivate:[AuthGuard]},
    { path: 'newsHome',   component: NewsHomeComponent ,canActivate:[AuthGuard]}]}
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