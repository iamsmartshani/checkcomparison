import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CollegeDetailsService {

 
  url="http://127.0.0.1:5000/college/s";
  constructor(private http:HttpClient) { }
 
  college_details(slug:any){  
  //console.warn("this is shani",slug);
  return this.http.post(this.url,slug)
  }
   

}
 
 