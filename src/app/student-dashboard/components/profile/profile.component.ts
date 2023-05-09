import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/admin/services/auth.service';
import { ActivatedRoute } from '@angular/router'




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 
  info:any;
  updatereq:any;
  public message: boolean=false;
  msg: string;


  
  constructor(private profile:AuthService,  private activatedRoute: ActivatedRoute) {
    let usid = {id:localStorage.getItem("STUDENT_USER")};
    this.profile.userprofile(usid).subscribe((udtl)=>{
      console.warn("userdetails",udtl);
      this.info=udtl;

    })

  }

  ngOnInit(): void {

  }
  

  updateuser(data:any){
    data.id=localStorage.getItem("STUDENT_USER");

    console.warn(data)
    this.profile.updateprofile(data,).subscribe((result:any)=>{
    this.updatereq = result;
    // console.warn(this.updatereq['code'])
    if(this.updatereq['code']=='SUCCESS')
    {      
      // alert('Form updated successfully')
      this.message=true;


      setTimeout( () => {
        this.message = false;
     }, 5000);
      

    }
      

      // if(result!=null && this.updatereq['message']=='exist'){
      //   alert(this.updatereq['email']+" : Email id already exist in our database. Try again with new email id");
      // }

      // if(result!=null && this.regreq['message']=='success'){
      //     if (sessionStorage.getItem("STUDENT_USER") === null) {
      //     sessionStorage.setItem('STUDENT_USER', this.regreq['lastid']);
      //     // this.router.navigateByUrl('student-dashboard/profile');
      //     window.location.href='student-dashboard/profile';
      //     }
      //     alert("Registration done successfully!");
      // }


    })
  }


}


