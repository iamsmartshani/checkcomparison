import { Component, OnInit } from '@angular/core';
import { BlogDetailsService } from '../../services/blog-details.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

 
 


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})




export class BlogDetailsComponent implements OnInit {

  

  alldetails:any; 

  
  blogdetails:any;
  
 

  constructor(private titleService: Title,      private meta: Meta, private blogdetail:BlogDetailsService, private activatedRoute: ActivatedRoute) { 

  
  }


  
  getblogdata(url1:any){
    let lists = {slug:url1};
    this.blogdetail.blogbyurl(lists).subscribe((result:any)=>{
    this.blogdetail = result;
    // console.warn("thisisurl",lists)
    console.warn("newdata",this.blogdetail)
    this.alldetails=result;
    this.titleService.setTitle(this.alldetails[0]['nr_mtitle']); 
    this.meta.updateTag (  { name: 'keywords', content: this.alldetails[0]['nr_mkeyword'] }); 
    this.meta.updateTag (  { name: 'description', content: this.alldetails[0]['nr_mdescription'] }); 
    // console.warn("happy",this.alldetails[0]['nr_large_description'])
    // transform("test",this.alldetails[0]['nr_large_description'])
       
    this.blogdetails = this.decodeEntities(this.alldetails[0]['nr_large_description']);
 
    })
}



  ngOnInit(): void {

  let url = this.activatedRoute.snapshot.params.url;
  this.getblogdata(url);

  

  
  }

 
 



 
    decodeEntities(str:any) {
      // this prevents any overhead from creating the object each time
      const element = document.createElement('div');
      if (str && typeof str === 'string') {
        // strip script/html tags
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, '');
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, '');
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = '';
      }
      return str;
    }


    

  



}
