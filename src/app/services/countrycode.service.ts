import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountrycodeService {

  constructor(private http:HttpClient) { }

  allcountrycode(){
    return this.http.get("http://127.0.0.1:5000/countrylist")
  }
}

 