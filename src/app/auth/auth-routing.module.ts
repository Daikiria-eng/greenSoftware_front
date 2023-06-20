import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { LogInComponent } from './pages/log-in/log-in.component';

const routes:Routes =[
  {
    path:'',
    children:[
      {path:'log-in',component:LogInComponent},
      {path:'sign-up',component:SignUpComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
