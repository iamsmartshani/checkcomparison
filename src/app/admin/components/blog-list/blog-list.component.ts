import { Component, OnInit } from '@angular/core';
import { BlogService} from '../../services/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  bloglists:any; 
  list:any;
  
  constructor(private blog:BlogService, private activatedRoute: ActivatedRoute) { }


  deleteblog(nrid:any){
    let lists = {id:nrid};
    if(confirm('Do you really want to delete this blog'))
    this.blog.deleteblog(lists).subscribe((result:any)=>{
      alert("Blog deleted successfully!")
    this.bloglists=result; 
    // console.warn("resp",result)
    })
  } 


  editblog(nrid:any){
    let lists = {id:nrid};
    console.warn("edit",lists)
    // this.blog.deleteblog(lists).subscribe((result:any)=>{
    // this.bloglists=result; 
    // // console.warn("resp",result)
    // })
  } 


  ngOnInit(): void {
 
      this.blog.getbloglist(this.list).subscribe((data)=>{
        this.bloglists=data;  
        console.warn(this.bloglists) 
      })
  }
  
     


   

}
