import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url="http://127.0.0.1:5000/";

  constructor(private http:HttpClient) { }

  checkloginuser(data:any){
    return this.http.post(this.url+"admin-auth",data)
  }


  checkstudent(data:any){
    return this.http.post(this.url+"student-auth",data)
  }
  
 
  userprofile(data:any){
  return this.http.post(this.url+"userprofile",data)
  }


   

  updateprofile(data:any){
  return this.http.post(this.url+"update-profile",data)
  }


  getcommonform(data:any){
    return this.http.post(this.url+"commonapplication",data)
    }

  removecollege(data:any){
    return this.http.post(this.url+"removecolleges",data)
    }

    
  applyin(data:any){
    return this.http.post(this.url+"applyincommon",data)
    }


  processfromdetails(data:any){
    return this.http.post(this.url+"singleformdetail",data)
    }


  GetToken(){
    return localStorage.getItem('token')||'';
   }
}
