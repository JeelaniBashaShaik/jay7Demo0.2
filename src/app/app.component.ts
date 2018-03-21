import { Component,OnInit } from '@angular/core';
import { FetchService } from './fetch.service';
declare var $:any;
declare var Blazy:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
 
  constructor(private _fetchService:FetchService){}
  ngOnInit(){
    

    $( document ).ready(function() {
    /*   $('#tabs-swipe-demo').tabs({
        swipeable: true,
        responsiveThreshold: Infinity
      }); */
      var bLazy = new Blazy();
   });
  }

  techFlag:boolean=false;
  natFlag:boolean=false;
  vergeFlag:boolean=false;
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
}
