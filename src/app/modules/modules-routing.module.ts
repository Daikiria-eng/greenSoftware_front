import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListModulesComponent } from './pages/list-modules/list-modules.component';
import { ExamComponent } from './pages/exam/exam.component';

const routes:Routes=[
  {
    path:'',
    children:[
      {path:'list-modules',component:ListModulesComponent},
      {path:'exam',component:ExamComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ModulesRoutingModule { }
