import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogDetailsService {


  url="http://127.0.0.1:5000/blog/a";
  constructor(private http:HttpClient) { }


  blogbyurl(slug:any){
    return this.http.post(this.url,slug)
  }
}
