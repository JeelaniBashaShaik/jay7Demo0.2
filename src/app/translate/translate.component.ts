import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
declare var $:any;
@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {


  targetLanguage:any;
  queryWord:string;
  queryResult:string;
   languages = [
    {code:'ar', value: 'Arabic'},
    {code:'bn', value: 'Bengali'},
    {code:'zh-CN', value: 'Chinese'},
    {code:'nl', value: 'Dutch'},
    {code:'fr', value: 'French'},
    {code:'de', value: 'German'},
    {code:'gu', value: 'Gujrati'},
    {code:'hi', value: 'Hindi'},
    {code:'id', value: 'Indonesia'},
    {code:'kn', value: 'Kannada'},
    {code:'ml', value: 'Malyalam'},
    {code:'mr', value: 'Marathi'},
    {code:'fa', value: 'Persian'},
    {code:'pa', value: 'Punjabi'},
    {code:'es', value: 'Spanish'},
    {code:'ta', value: 'Tamil'},
    {code:'te', value: 'Telugu'},
    {code:'ur', value: 'Urdu'}
    
  ];

  constructor(private _fetchService : FetchService) { }

   ngOnInit() {
    this.targetLanguage = 'ar';
    $('.dropdown-trigger').dropdown();
  }
  selectLanguage(val){
    this.targetLanguage = val.code;
    console.log(this.targetLanguage);
  }

  translate(){
    console.log(this.queryWord);
    this._fetchService.translateText(this.targetLanguage,this.queryWord).subscribe(data=>{
      this.queryResult = data[0][0][0];
      console.log(this.queryResult);
    })
  }


}
