import { Component, OnInit } from "@angular/core";

import { UserService } from "../../../shared/services/user.service";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: "admin-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent implements OnInit {
  allUser = [];
  displayedColumns: string[] = ["position", "name", "role", "actions"];

  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.allUser$ = this.userService.getAllUsers();
    this.userService.getAllUsers().subscribe((data) => {
      if (data) {
        this.allUser = data;
      }
      console.log("DATA :: ", data);
    });
  }

  deleteUser(id) {
    this.userService.deleteUser(id).subscribe((data) => {
      if (data) {
        console.log("Delete user :: ", data);
      }
      console.log("DATA :: ", data);
    });
  }
}
