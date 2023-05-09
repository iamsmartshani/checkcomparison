import { Component, OnInit } from '@angular/core';
import { ComparisonService } from '../../services/comparison.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {

  complist:any;
  collegeids:any; 
  clist:any;
  placement:any;
  facount:any;

  justtest:any;
  

  cgl1:any;
  cgl2:any;
   

 
 

 

  localstorageitem:any=[];

  constructor(private titleService: Title,      private meta: Meta, private compelist:ComparisonService,  private activatedRoute: ActivatedRoute) {

    this.compelist.collegelistforselect().subscribe((selectlist)=>{
      //console.warn("colleges",selectlist);
      this.clist=selectlist;

    })
  
   }
 

  // private _DeviceModel: string = '';
  // public get DeviceModel(): string {
  //   return this._DeviceModel;
  // }
  // public set DeviceModel(v: string) {
  //   this._DeviceModel = v;
  // }
  // // DeviceModel = '';
  // DeviceModelList = ['global-institute-of-business-studies', 'guru-kashi-university', 'milestones-institute-of-allied-health-sciences','woxsen-university', 'ganga-group-of-institutions', 'shri-dhanwantry-ayurvedic-college-hospital', 'shri-dhanwantry-ayurvedic-college-hospital', 'kalka-dental-college', 'om-sterling-global-university', 'harmony-ayurvedic-medical-college-hospital'];

               
 

  
   getFindCollegeData(lists:any){
  // alert(lists.college1);

    // console.warn(lists);
    this.compelist.getCollege(lists).subscribe((result:any)=>{
    this.collegeids = result;
    // console.warn("lists",lists)
    console.warn("img",this.collegeids[0].facilities[0][1])


     
    this.complist=result;
 
    })

  }

  ngOnInit(): void {

    this.titleService.setTitle("Kolleges : Comparison"); 
    this.meta.updateTag (  { name: 'keywords', content: 'Kolleges, Comparison' }); 
    this.meta.updateTag (  { name: 'description', content: 'Find Kolleges in India' });

  let storageData:any = localStorage.getItem("comparelist");
  //console.log("storageDatastorageData",storageData);
  this.localstorageitem = JSON.parse(storageData);
  let  firstClg = this.localstorageitem[0].institute_url;
  let secoundClg = this.localstorageitem[1].institute_url;
  this.getCompareData(firstClg, secoundClg);
  this.cgl1=this.localstorageitem[1].institute_url;
  this.cgl2=this.localstorageitem[0].institute_url;
   

  ///////////////////// Get Activated URL ////////////////
  // let collegname = this.activatedRoute.snapshot.params.collegesname;
  // let urlArray = collegname.split('-vs-')
  // let data = urlArray[urlArray.length-1]
  // let data2 = urlArray[urlArray.length-2]
  // console.log(data);
  // console.log(data2);
   

  }

  getCompareData(url1:any,url2:any){
  let lists = {college1:url1,college2:url2};
      this.compelist.getCollege(lists).subscribe((result:any)=>{
        
      this.collegeids = result;
      // console.warn(lists)
      console.warn("newdata",this.collegeids)      
      this.complist=result;
      
      })
  }

}
