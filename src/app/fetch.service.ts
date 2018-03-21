import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class FetchService {

  constructor(private http:HttpClient) { }

  fetchNews(url):Observable<any>{
   return this.http.get(url);
  }
}
