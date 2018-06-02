import { Component, OnInit } from '@angular/core';
import { FetchService } from './../fetch.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
declare var $:any;
declare var Blazy:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news=[];
  toiNewsUrl='https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c';
  hinduNewsUrl='https://newsapi.org/v1/articles?source=the-hindu&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c';
  techRadarNewsUrl='https://newsapi.org/v1/articles?source=techradar&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c';
  natGeoNewsUrl='https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c';
  vergeNewsUrl='https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=2d99d74987364e95aaf013993c90327c';

  constructor(private _fetchService:FetchService,public afAuth: AngularFireAuth,private router:Router){}
  ngOnInit(){
    

    $( document ).ready(function() {
      $('#tabs-swipe-demo').tabs({});
      $(".button-collapse").sideNav();
      var bLazy = new Blazy({ 
        success: function(ele){
            // Image has loaded
            // Do your business here
            console.log('loaded');
        }
      , error: function(ele, msg){
            if(msg === 'missing'){
                // Data-src is missing
                console.log('mssing');
            }
            else if(msg === 'invalid'){
                // Data-src is invalid
                console.log('invalid');
            }  
        }
    });
   });
   if (typeof(Storage) !== "undefined") {
    this.displayName = localStorage.getItem('userName');
    this.displayImage = localStorage.getItem('userImage');
   } else {
     // Sorry! No Web Storage support..
   }
  }
  displayName:string;
  displayImage:string;
 

  logout() {
    this.afAuth.auth.signOut().then(data=>{
      this.router.navigateByUrl('/login');
    });
  }

  home(){
    this.router.navigateByUrl('/home');
  }
  
}
