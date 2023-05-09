import { Component, OnInit } from '@angular/core';
import { CollegesService } from '../../services/colleges.service';
import { BlogService } from '../../services/blog.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topuniversity:any;
  myblogs:any;

  constructor(private titleService: Title,      private meta: Meta,private top:CollegesService, private bloglist:BlogService ) {
 
    this.top.topcolleges().subscribe((list)=>{
      console.warn("toplist",list);
      this.topuniversity=list
    })

    this.bloglist.allblog().subscribe((data)=>{
      this.myblogs=data;
      // console.log("Data ====>",this.myblogs)
 
    })


   }

  ngOnInit(): void {

    this.titleService.setTitle("Kolleges : Home"); 
    this.meta.updateTag (  { name: 'keywords', content: 'Kolleges, Home' }); 
    this.meta.updateTag (  { name: 'description', content: 'Find Kolleges in India' }); 
  }

}
