import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientRoutingModule } from "./client-routing.module";
import { LoginComponent } from "./login/login.component";
import { SharedModule } from "../shared/shared.module";
import { DetailsCourseComponent } from "./details-course/details-course.component";
import { DetailsComponent } from "./details/details.component";

@NgModule({
  declarations: [LoginComponent, DetailsCourseComponent, DetailsComponent],
  imports: [SharedModule, CommonModule, ClientRoutingModule],
  exports: [LoginComponent, DetailsCourseComponent, DetailsComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class ClientModule {}
