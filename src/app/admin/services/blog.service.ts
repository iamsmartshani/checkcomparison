import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url="http://127.0.0.1:5500";
  constructor(private http:HttpClient) { }

  addblog(data:any){
    return this.http.post("http://127.0.0.1:5000/add-blog",data)
  }

  getbloglist(data:any){
    return this.http.post("http://127.0.0.1:5000/manage-blog",data)
  }

  editblogdata(data:any){
    return this.http.post("http://127.0.0.1:5000/edit-blog",data)
  }

  updateblogdata(data:any){
    return this.http.post("http://127.0.0.1:5000/update-blog",data)
  }

  

  deleteblog(slug:any){
    return this.http.post("http://127.0.0.1:5000/delete-blog/",slug)
  }

}
