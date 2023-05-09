import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public pagename: string = "";
  
  constructor(private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
   
    
    if (sessionStorage.getItem("ADMIN_USER") !== null &&  sessionStorage.getItem("ADMIN_USER")==='admin') {
      // this.router.navigateByUrl('admin/dashboard');
    }
    else
    {
      this.router.navigateByUrl('admin/login');
    }

    
    // this.pagename = this.router.url;
    // console.log(this.router.url);
    // const page= this.pagename.split('/');
    // console.warn("page",page)
    
     
  }

}
