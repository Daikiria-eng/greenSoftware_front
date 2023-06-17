import { Component } from '@angular/core';
import { UserService } from '../../../service/user-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

    constructor(private userService:UserService, private router:Router){}
}
