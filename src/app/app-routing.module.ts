import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogComponent } from './components/blog/blog.component';
import { CollegeDetailsComponent } from './components/college-details/college-details.component';
import { CollegesComponent } from './components/colleges/colleges.component';
import { ComparisonComponent } from './components/comparison/comparison.component';
import { ContactComponent } from './components/contact/contact.component';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

 
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'registration',component:RegistrationComponent},
  // {path:'registration/:url/:course',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'colleges',component:CollegesComponent},
  {path:'colleges/medical-college',component:CollegesComponent},
  {path:'colleges/engineering-college',component:CollegesComponent},
  {path:'colleges/paramedical-college',component:CollegesComponent},
  {path:'colleges/hotel-management',component:CollegesComponent},
  {path:'college/:url',component:CollegeDetailsComponent},
  // {path: 'colleges',component:CollegesComponent,
  // children: [
  //   {
  //     path: '/:medical-college',
  //     component: CollegesComponent,
  //   },
  //   {
  //     path: '/:engineering-college',
  //     component: CollegesComponent,
  //   },
  //   {
  //     path: '/:agriculture-college',
  //     component: CollegesComponent,
  //   },
  //   {
  //     path: '/:paramedical-college',
  //     component: CollegesComponent,
  //   },
  //   {
  //     path: '/:hotel-management',
  //     component: CollegesComponent,
  //   },
  // ]

  // },
  {path:'comparison',component:ComparisonComponent},
  {path:'comparison/:collegesname',component:ComparisonComponent},
  {path:'blog',component:BlogComponent},
  {path:'blog/:url',component:BlogDetailsComponent},
  {path:'admin',loadChildren:()=>import('./admin/admin.module')
  .then(mod=>mod.AdminModule)},
  {path:'student-dashboard',loadChildren:()=>import('./student-dashboard/student-dashboard.module')
  .then(mod=>mod.StudentDashboardModule)},
  {path:'**',component:Error404Component}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 

  
 
}





 


  
 
 
