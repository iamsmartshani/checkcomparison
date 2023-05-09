import { Component, OnInit } from '@angular/core';
import { BlogService} from '../../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-manage-blog',
  templateUrl: './manage-blog.component.html',
  styleUrls: ['./manage-blog.component.css']
})
export class ManageBlogComponent implements OnInit {
  baseimage:string;
  response:any; 
  myImage!: Observable<any>;

  editdatalist:any;
 
  constructor(private blog:BlogService,  private activatedRoute: ActivatedRoute, private router:Router) { }
  

  onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    // console.warn(file)
    this.convertToBase64(file)
    // if (target.files && target.files.length > 0) {
    //     console.log(target.files[0]);
    //     const file = target.files[0];
    //     this.convertToBase64(file);
 
    // }
}

convertToBase64(file:File){
  const observable = new Observable((Subscriber:Subscriber<any>)=>{
    this.readFile(file,Subscriber)
  })
  observable.subscribe((d) =>{
    this.baseimage=d;
    this.myImage = d;
  })
  }


  readFile(file:File, subscriber: Subscriber<any>){
    const filereader = new FileReader();
    
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
      // console.warn("this file",filereader.result)
    }
  }
   
 


  add_blog(lists:any){
    // console.warn("hishano",this.baseimage)
    // lists.file=this.baseimage
    console.warn("form data",lists)
    this.blog.addblog(lists).subscribe((result:any)=>{ 
    this.response=result;
    // console.warn("Response",this.response)
    this.router.navigateByUrl('admin/blog-list');
    
    })

  }


  update_blog(lists:any){
     
    if(lists['file']===undefined)
    {
      lists['file']=null;
    }
    // console.warn("hishano",this.baseimage)
    // lists.file=this.baseimage
    console.warn("form data",lists)
    
    this.blog.updateblogdata(lists).subscribe((result:any)=>{ 
    this.response=result;
    console.warn("Response",this.response)
    this.router.navigateByUrl('admin/blog-list');
    
    })

  }

 
   
  ngOnInit(): void {

    let id = this.activatedRoute.snapshot.params.id;
    if(id>0)
    {
      this.geteditdata(id);
    }
    

  }


  geteditdata(id:any){
  let lists = {id:id};
  this.blog.editblogdata(lists).subscribe((result:any)=>{
  // console.warn("lat",result)
  this.editdatalist = result;
  this.myImage=this.editdatalist['0']['nr_image'];
  // console.warn(this.editdatalist);
   
  
   

  })
}




}



