import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonApplicationComponent } from './components/common-application/common-application.component';
import { LogoutComponent } from './components/logout/logout.component';
import { FormsModule } from '@angular/forms' 
import { CommonModule } from '@angular/common';
import { ApplyComponent } from './components/apply/apply.component'


 

const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'common-form',component:CommonApplicationComponent},
  {path:'apply',component:ApplyComponent},
  {path:'logout', component:LogoutComponent}
];


@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    CommonApplicationComponent,
    LogoutComponent,
    ApplyComponent
     
  ],
  imports: [RouterModule.forChild(routes),FormsModule,CommonModule],
  exports: [RouterModule]
})
export class StudentDashboardModule { }
