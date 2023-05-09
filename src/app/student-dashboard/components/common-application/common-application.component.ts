import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/admin/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-common-application',
  templateUrl: './common-application.component.html',
  styleUrls: ['./common-application.component.css']
})
export class CommonApplicationComponent implements OnInit {

  cmf:any;

  constructor(private common:AuthService, private activatedRoute: ActivatedRoute, private router:Router) { 


    let usid = {id:localStorage.getItem("STUDENT_USER")};
    this.common.getcommonform(usid).subscribe((cf)=>{
      this.cmf=cf;  
       console.warn("form",this.cmf) 
    })


  }

  currentapplyform(id:any,college:any,course:any){
    sessionStorage.setItem('COLLEGE', college);
    sessionStorage.setItem('COURSE', course);
    sessionStorage.setItem('APPLICATIONPROCESSID', id);
    this.router.navigateByUrl('student-dashboard/apply');
  }


  removecollege(del:any){
    let lists= {id:del};
    if(confirm('Do you really want to remove this college '))
    this.common.removecollege(lists).subscribe((result:any)=>{
      if(result['code']=='SUCCESS'){
        window.location.reload(); 
      }
    })
    
  }
 


  ngOnInit(): void {
 

  }

  

}
