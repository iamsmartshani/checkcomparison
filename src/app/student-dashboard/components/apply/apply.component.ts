import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/admin/services/auth.service';
import { CountrycodeService } from '../../../services/countrycode.service';
import { HttpClient } from '@angular/common/http';
import { UploadService } from '../../../services/upload.service';


@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  file: File ;


  schoolcourse:any;
  applyresponse:any;
  info:any;
  loginfo:any;
  countrylist:any;
  currentformid:any;
  mobileno:any;
  emailids:any;
  ccode:any;
  currentstep:Number=1;
  public message: boolean=false;
  public havediploma: boolean = true;
  public havedegree: boolean = true;

  public twlresult: boolean = true;
  public diplomaresult: boolean = true;
  
  appearcollege:any;
  appearcourse:any;

  uploaderror:any;
  uploadresponse:any;
  showsuccess:boolean=false;


  stepDB:any;


  
 
 


  
  enable(e:any){
    if(e=='yes'){        
      this.havediploma = false;
    }
    else
    { 
      this.havediploma = true;      
    }
     
 }

 

  ug(f:any){
    if(f=='yes'){        
      this.havedegree = false;
    }
    else
    { 
      this.havedegree = true;      
    }
  }



  resultawait(g:any){
    if(g=='Declared'){        
      this.twlresult = false;
    }
    else
    { 
      this.twlresult = true;      
    }
  }

  resultdiploma(h:any){
    if(h=='Declared'){        
      this.diplomaresult = false;
    }
    else
    { 
      this.diplomaresult = true;      
    }
  }

  
     
  
  constructor(private http: HttpClient,  private uploadService: UploadService, private applyapplication:AuthService,  private activatedRoute: ActivatedRoute,private profile:AuthService, private countrylists:CountrycodeService,  private router:Router) {

     
    this.profile.userprofile({id:localStorage.getItem("STUDENT_USER")}).subscribe((logdtl)=>{
      this.loginfo=logdtl;
      // console.warn(this.loginfo);
      this.emailids=this.loginfo[0]['email'];
      this.mobileno=this.loginfo[0]['mobile'];
      this.ccode=this.loginfo[0]['mob_code'];
       
    })
 
    let usid = {studentid:localStorage.getItem("STUDENT_USER")};
    let currentform = {formid:sessionStorage.getItem("APPLICATIONPROCESSID")};
    let pushdt = {studentid:usid.studentid,formid:currentform.formid};
    this.profile.processfromdetails(pushdt).subscribe((udtl)=>{
    this.info=udtl;
    this.stepDB=this.info[0]['step'];
    // console.warn("Hey boy",this.info)

    let getstep = Number(this.activatedRoute.snapshot.queryParamMap.get("step")); 
    if(getstep > 0)
    {
      this.currentstep =getstep;
    } else {
      this.currentstep=this.info[0].step;
    }
    

    this.appearcollege=sessionStorage.getItem("COLLEGE");
    this.appearcourse=sessionStorage.getItem("COURSE");

    if(this.info[0].have_diploma!='' && this.info[0].have_diploma=='yes')
    {
      this.havediploma = false;
    }
    if(this.info[0].have_degree!='' && this.info[0].have_degree=='yes')
    {
      
      this.havedegree=false
    }

    if(this.info[0].result_status12!='' && this.info[0].result_status12=='Declared')
    {
    this.twlresult = false;
    }

    if(this.info[0].result_statusdip!='' && this.info[0].result_statusdip=='Declared')
    {
    this.diplomaresult = false;
    
    }

    })


    
    
   

    this.countrylists.allcountrycode().subscribe((conlist)=>{
      this.countrylist=conlist
      // console.warn(this.countrylist);

    })
 
   }


   onFilechange(event: any) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]
  }
  
upload(fldname:any) {
if (this.file) {
  this.file
  
let filesize= (this.file.size/1024)/1024;
if(filesize >=1)
{  

this.uploaderror="File size is too big. File size should be less than 1 MB.";
 
        setTimeout( () => {
          this.uploaderror = null;
       }, 5000);  


}
else 
{

  
 
      var ext = this.file.name.substring(this.file.name.lastIndexOf('.') + 1);
      // console.warn("ext",ext);
      let pgl =[{formid:sessionStorage.getItem("APPLICATIONPROCESSID"),field:fldname}];
      if (ext.toLowerCase() == 'png' || ext.toLowerCase() == 'jpg' || ext.toLowerCase() == 'jpeg' || ext.toLowerCase() == 'pdf') {
      this.uploadService.uploadfile(this.file,pgl).subscribe(resp => {
        this.uploadresponse=resp;
        // console.warn(resp);

        if(this.uploadresponse['code']=='SUCCESS'){
          
          this.showsuccess= true;
          this.uploaderror="Uploaded Successfully.";

          setTimeout( () => {
            this.uploaderror = null;
            window.location.reload(); 
         }, 3000);  
        }
        
      })  
      }
      else 
      {
      // console.warn("Invalid Files")
      this.uploaderror='Invalid File Type. Please upload png, jpg, jpeg, pdf file only.';

      setTimeout( () => {
        this.uploaderror = null;
     }, 5000);  

      }

   
  } 

} else {
// alert("Please select a file first")
this.uploaderror="Please select a file first";
}
}
 
  ngOnInit(): void {
     
    if (sessionStorage.getItem("APPLICATIONPROCESSID") === null) {
      this.router.navigateByUrl('student-dashboard/common-form');
    }
    this.currentformid=sessionStorage.getItem("APPLICATIONPROCESSID");
    // this.Fullname==''? this.Fullname='shani verma': this.Fullname='shweta';
    // this.emailids==''? this.emailids='shani verma': this.emailids='iamsmartsunny@gmail.com';
  
   
    

  }
    
  
  removefile(deldata:any)
  {
     
    let remdata =[{formid:sessionStorage.getItem("APPLICATIONPROCESSID"),field:deldata}];
    if(confirm('Do you really want to delete this data?'))
    // console.warn(remdata);
    this.uploadService.deletedoc(remdata).subscribe((resp:any)=>{
      let delresponse = resp;
      if(delresponse['code']=='SUCCESS'){
      // this.showsuccess= true;
      this.uploaderror='Deleted successfully';
      setTimeout( () => {
        window.location.reload(); 
     }, 3000); 
     
    }
    })
  }

  next(steps:any){
    this.currentstep=steps+1;
  }

  back(steps:any){
    this.currentstep=steps-1;
  }

   

  apply(data:any){
    // console.warn("may",data)
    this.applyapplication.applyin(data).subscribe((result:any)=>{
      this.applyresponse = result;
      // console.warn(this.applyresponse['code'])

      if(this.applyresponse['code']=='SUCCESS'){
        this.currentstep=this.applyresponse['newstep'];
        // alert(this.currentstep);

        this.stepDB=this.applyresponse['newstep']
 

        this.message=true;
        setTimeout( () => {
          this.message = false;
       }, 5000);

      }
 
    })
  }

  

}
