import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComparisonService {

  url="http://127.0.0.1:5000/comparison";
  constructor(private http:HttpClient) { }
  comparelist(){
    return this.http.get(this.url)
  }

  getCollege(data:any){
    return this.http.post("http://127.0.0.1:5000/comparison",data)
  }



  collegelistforselect(){
    return this.http.get("http://127.0.0.1:5000/collegenames")
  }

 

}
