import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private activatedrouted:ActivatedRoute, private router:Router) {
     
   }

  ngOnInit(): void {
    if (localStorage.getItem("STUDENT_USER") !== null &&  localStorage.getItem("STUDENT_USER")) {
      // this.router.navigateByUrl('admin/dashboard');
    }
    else
    {
      this.router.navigateByUrl('/login');
    }
  }

}
