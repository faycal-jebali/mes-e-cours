import { Component, OnInit } from "@angular/core";

import { NotificationService } from "../../../shared/components/notification/notification.service";
import { CoursesService } from "../../../shared/services/courses.service";

@Component({
  selector: "admin-courses-list",
  templateUrl: "./courses-list.component.html",
  styleUrls: ["./courses-list.component.scss"],
})
export class CoursesListComponent implements OnInit {
  allCourse = [];
  displayedColumns: string[] = ["image", "position", "name", "role", "actions"];

  constructor(
    private CoursesService: CoursesService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    // this.allUser$ = this.userService.getAllUsers();
    this.CoursesService.getCourses().subscribe((data) => {
      if (data) {
        this.allCourse = data;
      }
      console.log("DATA :: ", data);
    });
  }

  deleteCourse(id) {
    this.CoursesService.deleteCourse(id).subscribe((data) => {
      if (data && data.body.success) {
        this.allCourse = this.allCourse.filter((item) => item._id !== id);
        this.notificationService.success("Félicitaions!", data.body.message);
        console.log("Delete Course :: ", data);
      }
      console.log("DATA :: ", data);
    });
  }
}
