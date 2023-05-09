import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url="http://127.0.0.1:5000/blog";
  constructor(private http:HttpClient) { }

  allblog()
  {
    return this.http.get(this.url);
  }

  

}
