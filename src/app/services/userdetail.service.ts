import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdetailService {

  url="http://127.0.0.1:5000/";
  constructor(private http:HttpClient) { }

  userprofile(data:any){
    return this.http.post(this.url+"userprofile",data)
    }
}


