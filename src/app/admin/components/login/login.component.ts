import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  response:any; 

  constructor(private checkadmin:AuthService,  private activatedRoute: ActivatedRoute, private router:Router) { }


  
  adminauthentication(lists:any){
    // console.warn("less",lists)
    this.checkadmin.checkloginuser(lists).subscribe((result:any)=>{ 
    this.response=result;
     console.warn(this.response);
    if(result!=null && this.response['login']=='success'){
        
      if (sessionStorage.getItem("ADMIN_USER") === null) {
      sessionStorage.setItem('ADMIN_USER', this.response['user']);
      this.router.navigateByUrl('admin/dashboard');
      }
        
      // this.route.navigate([''])
    }
    else{
      alert("Invalid Username or Password. Please Try Again!")
    }
 
    })

  }

  ngOnInit(): void {
 
      if (sessionStorage.getItem("ADMIN_USER") !== null &&  sessionStorage.getItem("ADMIN_USER")==='admin') {
        this.router.navigateByUrl('admin/dashboard');
      }
  }

  
}

 
