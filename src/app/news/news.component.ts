import { Component, OnInit,Input } from '@angular/core';
import { FetchService } from './../fetch.service';
declare var $:any;
declare var Blazy:any;
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input("url") url:string;
  @Input("trigger") trigger:boolean;
  constructor(private _fetchService:FetchService){}

  news=[];
  ngOnInit() {
    
    
   
  }
  
  ngOnChanges(){
    this.fetchNews();
  }
    fetchNews(){
      if(this.trigger){
        this._fetchService.fetchNews(this.url).subscribe(data=>{
          let x = data.articles;
          this.news = x.filter(data=>{  
            if(data.urlToImage.indexOf('https://')>-1){
              return data;
            }
          })
      //    this.news = x;
        });
      }  
      }
    }
    

