import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  current_user: any;
  constructor(
    private userService: UserService,
  ) { 
    this.current_user = JSON.parse(localStorage.getItem('current_user'));    
    console.log('current_user :: ', this.current_user);
  }

  ngOnInit() {
    // localStorage.getItem('current_user')
    // this.userService.getCurrentUser()
  }

}
