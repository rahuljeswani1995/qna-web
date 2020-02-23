import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
      // return this.http.get("http://lsatmaxadmin.us/interview/loadData.php");
      return this.http.get("http://cors-anywhere.herokuapp.com/lsatmaxadmin.us/interview/loadData.php");
  }
}