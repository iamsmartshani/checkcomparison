import { Component, OnInit } from '@angular/core';
import { CollegesService } from '../../services/colleges.service';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute,Router } from '@angular/router';





@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.css']
})
export class CollegesComponent implements OnInit {
 
  colleges:any;
  result:any=[];

  stream:any=[];
   
  compare_ids:any = [];
  public totalItem :any = 0;

  public text: string = 'hello';
  
  localstorageitem:any=[];
  localitem:any=[];

  itemExists:any[]=[];

  title = 'Sample Application';
 

  constructor(private router: Router, private collegelist:CollegesService,  private titleService: Title,      private meta: Meta, private activatedRoute: ActivatedRoute, ) {  

    this.collegelist.streamlist().subscribe((stmlist)=>{
      //console.warn("countrylist",conlist);
      this.stream=stmlist
      console.warn("stream",this.stream);

    })

  }
 
    
  addcompare(item: any){
     
    this.collegelist.addtocompare(item);
    let list:any = localStorage.getItem("comparelist");
    
    if(list){
      
      list = JSON.parse(list)
      this.totalItem = list.length;
      this.localitem.push(item)
      localStorage.setItem('comparelist', JSON.stringify(this.localitem));
      this.totalItem = this.localitem.length ;
 
      

      //alert(this.totalItem);
    } else{
      this.totalItem =0;
      this.localitem.push(item)

      localStorage.setItem('comparelist', JSON.stringify(this.localitem));

    }
     
    this.localstorageitem = localStorage.getItem("comparelist");
    if(this.localstorageitem == null){ 
      
      this.localitem = 0;
    }
    else{
    this.localitem = JSON.parse(this.localstorageitem); 
    }
     
 
  }


  redcatpage(cat:any){
    alert(cat);
    

    // localStorage.setItem("medical-colleges");
    // this.router.navigateByUrl('student-dashboard/profile');
  }

  
  removelist(ritme:any){
    console.log(ritme.institute_url);
    const index = this.localitem.indexOf(ritme);
    this.localitem.splice(index, 1);
    localStorage.setItem("comparelist", JSON.stringify(this.localitem));
   
    // let list:any = localStorage.getItem("comparelist");
    // if(list){
      // list = JSON.parse(list)
      this.totalItem = this.localitem.length ;
      //alert(this.totalItem);
    // } else{
    //   this.totalItem =0;
    // }
 
  }

 

  ngOnInit(): void {

    this.titleService.setTitle("Kolleges : Colleges"); 
    this.meta.updateTag (  { name: 'keywords', content: 'Colleges' }); 
    this.meta.updateTag (  { name: 'description', content: 'Find Colleges in India' }); 

    this.colleges =[]
    this.collegelist.getList()
    // .subscribe(res=>{ })
    


    this.localstorageitem = localStorage.getItem("comparelist"); 
     this.localitem = JSON.parse(this.localstorageitem); 
     let paramdata={url:this.router.url};
     console.warn("paramdata",paramdata)
     this.collegelist.colleges(paramdata).subscribe((data)=>{
       console.warn("data",data)
       let collurl = this.activatedRoute.snapshot.params;
       //console.warn("utls",collurl)
       this.colleges=data;
      //  console.warn("mainss",this.colleges[0]['courselist'][])  
       let colleges = this.colleges
       for(let i=0; i<this.colleges.length; i++) {
             colleges[i].isSelected = false;

         for(let j=0; j<this.localitem.length; j++){
          if(colleges[i].e_id == this.localitem[j].e_id ){
            colleges[i].isSelected = true;
          }
          
         }
       
       }
      this.colleges = colleges
       //console.log("Data ====>",this.colleges)
  
     })

  
     let list:any = localStorage.getItem("comparelist")
     
     if(list && this.totalItem == 0){
       list = JSON.parse(list)
       this.totalItem = list.length;
     } 
     else
     {
      this.totalItem = 0;
     }

 
   

  }


   

}
  