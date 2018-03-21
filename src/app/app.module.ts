import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';

import { FetchService } from './fetch.service';
import { AuthService } from './core/auth.service';
import { AuthGuard } from './core/auth.guard';

import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsHomeComponent } from './news-home/news-home.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    LoginComponent,
    NewsHomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpClientModule,MaterializeModule,AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,AngularFireAuthModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [FetchService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
