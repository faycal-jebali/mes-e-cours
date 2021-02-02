import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

import { CourseManagementRoutingModule } from "./course-management-routing.module";
import { CoursesListComponent } from "./courses-list/courses-list.component";
import { EditCourseComponent } from "./edit-course/edit-course.component";
import { NewCourseComponent } from "./new-course/new-course.component";

@NgModule({
  declarations: [CoursesListComponent, NewCourseComponent, EditCourseComponent],
  imports: [SharedModule, CourseManagementRoutingModule],
  exports: [CoursesListComponent, NewCourseComponent, EditCourseComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class CourseManagementModule {}
