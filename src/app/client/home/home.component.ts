import { Component, OnInit } from "@angular/core";

import { Course } from "../../shared/business-objects/course";
import { CoursesService } from "../../shared/services/courses.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  courses: Course[];

  constructor(private CoursesService: CoursesService) {}

  ngOnInit() {
    this.CoursesService.getCourses().subscribe(
      (courses) => {
        this.courses = courses;
        console.log("HomeComponent courses : ", this.courses);
      },
      (error) => {
        console.log("HomeComponent getCourses() Erreur: ", this.courses);
      }
    );
  }
}
