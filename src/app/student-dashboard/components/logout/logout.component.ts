import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    localStorage.removeItem('STUDENT_USER');
    localStorage.removeItem('STUDENT_HASH');

    if (localStorage.getItem("STUDENT_USER") === null) {
    // this.router.navigateByUrl('/login');
      window.location.href='/login';
    }

  }


}
