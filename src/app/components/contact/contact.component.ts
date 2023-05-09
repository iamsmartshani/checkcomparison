import { Component, OnInit } from '@angular/core';
import {ContactService} from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private userData:ContactService) {}
  postId:any;
  
  
  getUserFormData(data:any){
    console.warn(data)
    this.userData.saveContact(data).subscribe((result:any)=>{
      this.postId = result;
      console.warn(this.postId)
 
    })

  }

  ngOnInit(): void {
  }

}
