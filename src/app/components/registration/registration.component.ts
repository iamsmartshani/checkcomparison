import { Component, OnInit } from '@angular/core';
import { CountrycodeService } from '../../services/countrycode.service';
import { ActivatedRoute, Router } from '@angular/router';
import {RegistrationService } from '../../services/registration.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  collegeurl:any;
  courseid:any;
  e_id:any;
  defcountry:any;

  countrylist:any;
  country:any; 
  lists:any[]=[]; 
  //states:any;
  

  states: any = [];

  regreq:any;

  genderlist = [
    {name: 'Male', sign: 'M'},
    {name: 'Female', sign: 'F'},
  ];
 
  
  constructor(private titleService: Title,      private meta: Meta, private countrylists:CountrycodeService, private activatedRoute:ActivatedRoute, private abcse:RegistrationService, private route: ActivatedRoute, private router:Router ) {
    this.countrylists.allcountrycode().subscribe((conlist)=>{
      //console.warn("countrylist",conlist);
      this.countrylist=conlist
    })

    this.defcountry='India (+91)';
   }
 

  ngOnInit(): void {
      //this.collegeid =this.route.snapshot.queryParamMap.get("collegeid") // use it when url line "registration/?id=abc"
      // this.collegeurl = this.activatedRoute.snapshot.params.url;
      // this.courseid= this.activatedRoute.snapshot.params.course;


    this.titleService.setTitle("Kolleges : Registration"); 
    this.meta.updateTag (  { name: 'keywords', content: 'Kolleges, Registration' }); 
    this.meta.updateTag (  { name: 'description', content: 'Find Kolleges in India' }); 

      this.collegeurl=this.route.snapshot.queryParamMap.get("url");
      this.courseid=this.route.snapshot.queryParamMap.get("course");;
      this.e_id=this.route.snapshot.queryParamMap.get("e_id");;
      
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
 

  onChange(deviceValue:any) {
    console.log(deviceValue);
    
}
  
  
//   allconlist(url1:any){
//     let lists = {slug:"train-with-the-best-to-get-your-license-to-fly"};
//     this.countrylist.blogbyurl(lists).subscribe((result:any)=>{
//     this.countrylist = result;
//     this.country=result;
//     console.log("This console"+result);
     
       
//     //this.blogdetails = this.decodeEntities(this.alldetails[0]['nr_large_description']);
 
//     })
// }



allconlist(seld:any){
  console.warn("Hi click",seld);
  this.countrylist.allcountrycode(this.lists).subscribe((result:any)=>{
  this.countrylist = result;
  // console.warn(this.lists)
  //console.warn("showwaht",this.countrylist)
  //this.complist=result;

  })

}


 
   

 



}
