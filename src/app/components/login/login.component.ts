import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/admin/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  response:any; 

 

  constructor(private titleService: Title,      private meta: Meta, private checkadmin:AuthService,  private activatedRoute: ActivatedRoute, private router:Router) { }

  studentauth(lists:any){
    // console.warn("studentlog",lists)
    this.checkadmin.checkstudent(lists).subscribe((result:any)=>{ 
    this.response=result;
    // console.warn(this.response);
 

    if(result!=null && this.response['login']=='success'){
        
      if (localStorage.getItem("STUDENT_USER") === null) {
        localStorage.setItem('STUDENT_USER', this.response['lastid']);
        localStorage.setItem('STUDENT_HASH', this.response['hash']);
        // this.router.navigateByUrl('student-dashboard/profile');
        window.location.href='student-dashboard/profile';
      }
        
      // this.route.navigate([''])
    }
    else{
      alert("Invalid Username or Password. Please Try Again!")
    }
 
    })

  }

  ngOnInit(): void {

    this.titleService.setTitle("Kolleges : Login"); 
    this.meta.updateTag (  { name: 'keywords', content: 'Kolleges, Login' }); 
    this.meta.updateTag (  { name: 'description', content: 'Find Kolleges in India' });    
    
    if (localStorage.getItem("STUDENT_USER")) {
      window.location.href='student-dashboard/profile';
    }


  }

}
