import { Injectable } from '@angular/core';
import { Environment } from '../../environment/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ModuleDTO } from '../../dto/module.dto';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class ModuleService {
  modules:ModuleDTO[]=[];
  private modules$:BehaviorSubject<ModuleDTO[]>;

  constructor(private http:HttpClient){
    this.modules$=new BehaviorSubject<ModuleDTO[]>(this.modules);
  }

  getAllModules():Observable<any>{
    const headers=new HttpHeaders({
      'Pass-Code':'admin'
    });
    return this.http.get(`${Environment.urlApi}/modules/get-all`,{headers});
  }
  
  shareModules(){
    
  }

  getByName(module:ModuleDTO){
    const headers=new HttpHeaders({
      'Content-Type':'Application/json'
    });
    return this.http.post(`${Environment.urlApi}/moules/get-by-name`,module,{headers});
  }
}