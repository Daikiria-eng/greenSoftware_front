import { Component } from '@angular/core';
import { ModuleService } from '../../../service/modules-service/modules.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { ModuleDTO } from 'src/app/dto/module.dto';

@Component({
  selector: 'app-list-modules',
  templateUrl: './list-modules.component.html',
  styleUrls: ['./list-modules.component.scss']
})
export class ListModulesComponent {
  modules:ModuleDTO[]=[];
  constructor(private moduleService:ModuleService){}
  
  ngOnInit(){
    this.getAllModules();
  }

  getAllModules(){
    this.moduleService.getAllModules().subscribe((receivedModules)=>{
      this.modules=receivedModules;
    });
  }
}