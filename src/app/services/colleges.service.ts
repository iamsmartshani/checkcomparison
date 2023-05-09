import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
 


export class CollegesService {

  public collegeslist : any=[]
  public comparelist : any=[]
  public storagecollege = new BehaviorSubject<any>([]);

  url="http://127.0.0.1:5000/";
  constructor(private http:HttpClient) { }
  colleges(data:any)
  {
    return this.http.post(this.url+"collegelist",data);
  }
 



  getList(){
    if(localStorage.getItem("comparelist")){
      let list:any =localStorage.getItem("comparelist");
      list = JSON.parse(list)
      // list.push(this.cartItemList)
      // localStorage.setItem('prodList', JSON.stringify(this.cartItemList)); // setting

      //debugger

      
    }
    return this.storagecollege.asObservable();
  }
 

  addtocompare(product : any){  
    this.collegeslist.push(product);
    this.storagecollege.next(this.collegeslist);
    localStorage.setItem('comparelist', JSON.stringify(this.collegeslist)); // setting
  }


  

    topcolleges(){
      return this.http.get(this.url+"topcolleges")
    }



    streamlist(){
      return this.http.get(this.url+"streamlist")
    }
 
  
}



