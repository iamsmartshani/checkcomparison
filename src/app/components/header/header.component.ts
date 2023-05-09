import { Component, OnInit } from '@angular/core';
import { UserdetailService } from 'src/app/services/userdetail.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isloggedin: boolean=false;
  // usid:Number=0;
  user:any;
  
  constructor(private profile:UserdetailService,  private activatedRoute: ActivatedRoute) {


    let usid = {id:localStorage.getItem("STUDENT_USER")};
     
    this.profile.userprofile(usid).subscribe((udtl)=>{
      // console.warn("userdetails",udtl);
      this.user=udtl;

    }) 



   }

  ngOnInit(): void {

  
    
    

  if (localStorage.getItem("STUDENT_USER") !== null &&  localStorage.getItem("STUDENT_USER")) {
    this.isloggedin=true;


  }
    
    
    
  }

}
