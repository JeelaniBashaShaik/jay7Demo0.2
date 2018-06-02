import { Component, OnInit } from '@angular/core';
import { FetchService } from './../fetch.service';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.css']
})
export class NewsHomeComponent implements OnInit {

  news=[];
  bbcNewsUrl='https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2d99d74987364e95aaf013993c90327c';
  hinduNewsUrl='https://newsapi.org/v1/articles?source=the-hindu&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c';
  techRadarNewsUrl='https://newsapi.org/v1/articles?source=techradar&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c';
  natGeoNewsUrl='https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c';
  vergeNewsUrl='https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c';
  newScientistUrl='https://newsapi.org/v1/articles?source=new-scientist&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c';

 constructor(private _fetchService:FetchService){}
  ngOnInit(){
 
  }

  techFlag:boolean=false;
  natFlag:boolean=false;
  vergeFlag:boolean=false;
  newScFlag:boolean=false;

  tech(){
    this.techFlag = true;
  }
  nat(){
    this.natFlag = true;
  }

  verge(){
    this.vergeFlag = true;
  }
  newSc(){
    this.newScFlag = true;
  }
}
