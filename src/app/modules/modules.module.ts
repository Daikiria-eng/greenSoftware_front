import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import { ListModulesComponent } from './pages/list-modules/list-modules.component';
import { ExamComponent } from './pages/exam/exam.component';



@NgModule({
  declarations: [
    ListModulesComponent,
    ExamComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
