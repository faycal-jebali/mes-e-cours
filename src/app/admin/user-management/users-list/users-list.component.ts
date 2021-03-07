import { Component, OnInit } from "@angular/core";
import { NotificationService } from "src/app/shared/components/notification/notification.service";

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

  constructor(
    private readonly userService: UserService,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit() {
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
        this.allUser = this.allUser.filter((item) => item._id !== id);
        this.notificationService.success("Félicitaions!", data?.body?.message);
      }
    }),
      (error) => {
        this.notificationService.error(
          "Problème!",
          `Au niveau de la suppression de l'utilisateur (${id})`,
          error,
          true
        );
      };
  }
}
