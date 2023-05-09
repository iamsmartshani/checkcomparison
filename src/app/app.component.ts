import { Component , OnInit} from '@angular/core';
import { UploadService } from './services/upload.service';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  // title = 'check';
  public adminmenushow: any;
  file: File ;
  title = 'Sample Application';
  id: any;
  constructor( 
    private uploadService: UploadService, 
    private titleService: Title,
    private meta: Meta, 
    private http:HttpClient, 
    private spinner:NgxSpinnerService,
    ){  }


  allpost:any;
  notEmptyPost = true;
  notscrolly = true;

  

  

    ngOnInit() {
    this.titleService.setTitle("Kolleges : Home"); 
    this.meta.addTag({name: 'keywords', content: 'Angular Project, Create Angular Project'});

    var thePath = window.location.href; 
    this.adminmenushow = thePath.split('/');
    this.adminmenushow = this.adminmenushow[3]; 
    
  

    
    
    // this.loadInitPost();
    }

    // Alll Below content for infinite scroll///

  //   loadInitPost() {
  //   const url='http://127.0.0.1:5000/collegelist'
  //   this.http.get(url).subscribe(data => {
  //     console.log("sudo",data);
  //     this.allpost = data;
  //   })
  //   }
  //   onScroll(){
  //     // console.log("scrolled");
  //     // this.spinner.show();
  //     if(this.notscrolly && this.notEmptyPost){
  //       this.spinner.show();
  //       this.notscrolly = false;
  //       this.loadNextPost();
  //     }
  //   }

  //   loadNextPost(){
  //   const url='http://127.0.0.1:5000/collegelist2'
  //   const lastPost = this.allpost[this.allpost.length - 1];
  //   //const lastPostId = lastPost.e_id;
  //   const lastPostId = lastPost.limit;
  //   console.warn("his",lastPostId);
  //   const dataToSend = new FormData();
  //   dataToSend.append('id', lastPostId);
    
    

  //   this.http.post(url, dataToSend)
  //   .subscribe( (data: any) => {
     
  //    const newPost = data[0];
  //    this.spinner.hide();
  //    if (newPost.length === 0 ) {
  //      this.notEmptyPost =  false;
  //    }
  //    // add newly fetched posts to the existing post
  //    console.warn("puja",newPost)
  //    this.allpost = this.allpost.concat(newPost);
  //    this.notscrolly = true;
  //  });


  //   }
}
