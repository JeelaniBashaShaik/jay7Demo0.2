import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { ChartModule } from '@kiwigrid/ngx-highcharts';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsHomeComponent } from './news-home/news-home.component';
import { MenuComponent } from './menu/menu.component';
import { WeatherComponent } from './weather/weather.component';

import { NgxDataGridModule } from '@jeelanibashashaik07/ngxdatagrid';
import { LinksComponent } from './links/links.component';
import { TranslateComponent } from './translate/translate.component';
import { FileComponent } from './file/file.component';
import { UploadService } from './upload.service';


export const firebaseConfig = {
  apiKey: 'AIzaSyALKAhqoBqrt-aV75jn5L0QcnIWxopxu94',
  authDomain: 'jay7demo2.firebaseapp.com',
  databaseURL: 'https://jay7demo2.firebaseio.com',
  projectId: 'jay7demo2',
  storageBucket: 'jay7demo2.appspot.com',
  messagingSenderId: '1058322672934'
};

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    LoginComponent,
    NewsHomeComponent,
    MenuComponent,
    WeatherComponent,
    LinksComponent,
    TranslateComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpClientModule,MaterializeModule,AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,AngularFireAuthModule, ChartModule,NgxDataGridModule,FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [FetchService,AuthService,AuthGuard, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
