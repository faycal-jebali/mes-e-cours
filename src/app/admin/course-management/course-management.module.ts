import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { CourseManagementRoutingModule } from "./course-management-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, CourseManagementRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class CourseManagementModule {}
