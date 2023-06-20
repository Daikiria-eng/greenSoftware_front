import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing.module';
import { ListModulesComponent } from './pages/list-modules/list-modules.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExamComponent } from './pages/exam/exam.component';



@NgModule({
  declarations: [
    ListModulesComponent,
    ExamComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModulesModule { }