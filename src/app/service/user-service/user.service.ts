import { Injectable } from '@angular/core';
import { Environment } from '../../environment/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UserDTO } from '../../dto/user.dto';

@Injectable({
  providedIn:'root'
})
export class UserService {
  constructor(private http:HttpClient){}
  
  logIn(user:UserDTO){
    const headers=new HttpHeaders({
      'Content-Type':'Application/json'
    });
    return this.http.post(`${Environment.urlApi}/user/validate`,user,{headers});
  }
  
  signUp(user:UserDTO){
    const headers=new HttpHeaders({
      'Content-Type':'Application/json'
    });
    return this.http.post(`${Environment.urlApi}/user/insert`,user,{headers});
  }
  
  verify(user:UserDTO){
    const headers=new HttpHeaders({
      'Content-Type':'Application/json',
      'Authorization':user.token
    });
    return this.http.post(`${Environment.urlApi}/user/insert`,user,{headers});
  }
}