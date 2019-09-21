import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../business-objects/user';
import { UserService } from '../../../../services/user.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'admin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  allUser = [];
  displayedColumns: string[] = ['position', 'name', 'role', 'actions'];

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.allUser$ = this.userService.getAllUsers();
    this.userService.getAllUsers().subscribe((data) => {
      if (data) {
        this.allUser = data;
      }
      console.log('DATA :: ', data);
    })
  }

  deleteUser(id) {
    this.userService.deleteUser(id).subscribe((data) => {
      if (data) {
        console.log('Delete user :: ', data);
      }
      console.log('DATA :: ', data);
    })
  }
}
