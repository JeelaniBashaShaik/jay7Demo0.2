import { Component, OnInit } from '@angular/core';
import { FetchService } from './../fetch.service';
declare var $:any;
declare var Blazy:any;
@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.css']
})
export class NewsHomeComponent implements OnInit {

  news=[];
  toiNewsUrl='https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c';
  hinduNewsUrl='https://newsapi.org/v1/articles?source=the-hindu&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c';
  techRadarNewsUrl='https://newsapi.org/v1/articles?source=techradar&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c';
  natGeoNewsUrl='https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c';
  vergeNewsUrl='https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c';
  newScientistUrl='https://newsapi.org/v1/articles?source=new-scientist&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c';

 constructor(private _fetchService:FetchService){}
  ngOnInit(){
    

    $( document ).ready(function() {
      $('#tabs-swipe-demo').tabs({
      
      });
      var bLazy = new Blazy();
   });
  }

  techFlag:boolean=false;
  natFlag:boolean=false;
  vergeFlag:boolean=false;
  newScFlag:boolean=false;
  tech(){
    this.techFlag = true;
    console.log("inside tech flag");
  }
  nat(){
    this.natFlag = true;
    console.log("inside nat flag");
  }

  verge(){
    this.vergeFlag = true;
    console.log("inside verge flag");
  }
  newSc(){
    this.newScFlag = true;
  }
}
