import { Component } from '@angular/core';
import { UserService } from '../../../service/user-service/user.service';
import { UserDTO } from 'src/app/dto/user.dto';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  user:UserDTO=new UserDTO();

  constructor(private userService:UserService){}

  signUp(){
    //th
  }
}
