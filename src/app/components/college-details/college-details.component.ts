import { Component, OnInit } from '@angular/core';
import { CollegeDetailsService } from '../../services/college-details.service';
import { ActivatedRoute,Router } from '@angular/router';
import { CountrycodeService } from '../../services/countrycode.service';
import { stringify } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RegistrationService } from '../../services/registration.service';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-college-details',
  templateUrl: './college-details.component.html',
  styleUrls: ['./college-details.component.css']
})
export class CollegeDetailsComponent implements OnInit {

  isloggedin: boolean=false;


  isReadMore = true
  showText() {
     this.isReadMore = !this.isReadMore
  }
  

  cdetail:any=[];
  allinfo:any;
  slug:any;
  country:any;
  currency:any;
  collegecourse:any=[];
  facility:any=[];
  boyhostel:any=[];
  girlhostel:any=[];
  awards:any=[];
  allplacements:any=[];
  collegepics:any=[];
  countrylist:any;
  courseid:any;
  coursename:any
  spz:any;
  e_id:any;
  regreq:any;
  userid:any;
  collegename:any;
  addcourseresp:any;
   

  // li:any;
  // lis:any=[];
  
 
  constructor(private titleService: Title,      private meta: Meta, private details:CollegeDetailsService, private http : HttpClient,  private activatedRoute: ActivatedRoute, private countrylists:CountrycodeService, private abcse:RegistrationService,) {

    this.countrylists.allcountrycode().subscribe((conlist)=>{
      //console.warn("countrylist",conlist);
      this.countrylist=conlist
    }) 

   }


   getcollegedetail(slug:any){
    let lists = {url:slug};
      this.details.college_details(lists).subscribe((result:any)=>{
      this.cdetail = result;
      
      this.titleService.setTitle(this.cdetail[0]['metatitle']); 
      this.meta.updateTag (  { name: 'keywords', content: this.cdetail[0]['metatag'] }); 
      this.meta.updateTag (  { name: 'description', content: this.cdetail[0]['metadesc'] });
      
      console.warn("newdata",this.cdetail)
      this.e_id =this.cdetail[0]['e_id'];
      this.collegecourse=this.cdetail[0]['courses'];
      // console.warn("course",this.collegecourse)
      this.country= this.cdetail[0]['country'];
      this.facility= this.cdetail[0]['facility'];
      this.boyhostel=this.cdetail[0]['boyhostel'];
      this.girlhostel=this.cdetail[0]['girlhostel'];
      this.awards=this.cdetail[0]['awards'];
      this.allplacements=this.cdetail[0]['placement'];
      this.collegepics=this.cdetail[0]['collegepic'];
      if(this.country=='India'){ this.currency='&#8377;';} else { this.currency='&#36;'; }
      this.allinfo=result ;
      this.collegename = this.cdetail[0]['institute_name'];
     
      
      
        })
      }

   
  ngOnInit(): void {
 

    if (localStorage.getItem("STUDENT_USER") !== null &&  localStorage.getItem("STUDENT_USER")) {
      this.isloggedin=true;
       

      this.userid={id:localStorage.getItem("STUDENT_USER")};;
      
    }
    

    // this.http.get('http://www.mocky.io/v2/5ea172973100002d001eeada')
    // .subscribe(Response => {
  
      
    //   console.log(Response)
    //   this.li=Response;
    //   this.lis=this.li.list;
    // });

     
    
      
     
 
    // this.details.college_details("alliance-university").subscribe((result:any)=>{
    //   this.cdetail = result ;
    //   console.warn("newdata",this.cdetail)
    //   this.allinfo=result ;
  
    //   })

    

    let collurl = this.activatedRoute.snapshot.params.url;
    this.getcollegedetail(collurl);
    
 
  
  }

  



    // applybtn(e:any)
    // {
    //  alert(e) 
    // }
    
    // public applybtn(e:any): void {
       
    //   e.data('guest')
    //   alert(e)
    // }

    myFunc(coursid:any,course:any,specl:any) {

      alert(coursid);
      alert(course);
      alert(specl);
      this.courseid=coursid;
      if(specl!=''){
       this.spz = " ["+specl+"]";
      }
      this.coursename=course+this.spz;
    }


  
    registerUser(data:any){
      console.warn(data)  
      this.abcse.saveregistration(data).subscribe((result:any)=>{
        
        this.regreq = result;
        console.warn(this.regreq)
  
        if(result!=null && this.regreq['message']=='exist'){
          alert(this.regreq['email']+" : Email id already exist in our database. Try again with new email id");
        }
        
        if(result!=null && this.regreq['message']=='success'){
            if (localStorage.getItem("STUDENT_USER") === null) {
              localStorage.setItem('STUDENT_USER', this.regreq['lastid']);
            // this.router.navigateByUrl('student-dashboard/profile');
            window.location.href='student-dashboard/profile';
            }
            alert("Registration done successfully!");
        }
  
  
      })
    }



    applyforcourse(data:any){
      this.abcse.applyinother(data).subscribe((result:any)=>{
      this.addcourseresp = result;
        if(result!=null && this.addcourseresp['message']=='success'){
            // if (sessionStorage.getItem("STUDENT_USER") === null) {
            //   sessionStorage.setItem('STUDENT_USER', this.addcourseresp['lastid']);
            // }
            window.location.href='student-dashboard/common-form';
        }
  
      })
    }
 

                         
   

 

}
