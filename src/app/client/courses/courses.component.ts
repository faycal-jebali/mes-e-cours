import { Component, OnInit } from "@angular/core";

import { Course } from "../../shared/business-objects/course";
import { CoursesService } from "../../shared/services/courses.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  constructor(private CoursesService: CoursesService) {}

  ngOnInit() {
    this.CoursesService.getCourses().subscribe(
      (courses) => {
        this.courses = courses;
        console.log("CoureseComponent courses : ", this.courses);
      },
      (error) => {
        console.log("CoursesComponent getCourses() Erreur: ", this.courses);
      }
    );
  }
}
