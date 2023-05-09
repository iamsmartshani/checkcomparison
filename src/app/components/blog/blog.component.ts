import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  myblogs:any;

  constructor(private titleService: Title,      private meta: Meta, private bloglist:BlogService) { }

  ngOnInit(): void {
  
    this.titleService.setTitle("Kolleges : Blog"); 
    this.meta.updateTag (  { name: 'keywords', content: 'Kolleges, Blog' }); 
    this.meta.updateTag (  { name: 'description', content: 'Find Kolleges in India' }); 
    
    this.bloglist.allblog().subscribe((data)=>{
       this.myblogs=data;
      //  console.log("Data ====>",this.myblogs)
  
     })

  }

}
