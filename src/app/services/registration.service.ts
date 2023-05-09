import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  saveregistration(data:any){
    return this.http.post("http://127.0.0.1:5000/save_registration",data)
  }

  applyinother(data:any){
    return this.http.post("http://127.0.0.1:5000/applyinothercollege",data)
  }

   
}





 
