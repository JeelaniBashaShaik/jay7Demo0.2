import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class FetchService {

  constructor(private http:HttpClient) { }

  fetchNews(url):Observable<any>{
   return this.http.get(url);
  }

  fetchChennaiWeather():Observable<any>{
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=chennai&apikey=0391eb5b9075f872d2e355a3f5ee3f1c&units=metric');
  }

  fetchGuntakalWeather():Observable<any>{
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=guntakal&apikey=0391eb5b9075f872d2e355a3f5ee3f1c&units=metric');
  }

  translateText(targetLanguage,queryWord):Observable<any>{
    return this.http.get('https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl='+targetLanguage+'&dt=t&q='+queryWord);
  }
}
