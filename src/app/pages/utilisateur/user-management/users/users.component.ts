import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../business-objects/user';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'admin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  allUser$: Observable<any[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.allUser$ = this.userService.getAllUsers();
  }
}
