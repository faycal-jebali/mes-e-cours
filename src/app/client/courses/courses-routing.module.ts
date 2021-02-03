import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/shared/guards/auth.guard";

import { DetailsCourseComponent } from "../details-course/details-course.component";
import { DetailsComponent } from "../details/details.component";
import { CoursesComponent } from "./courses.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", component: CoursesComponent },
      {
        path: ":id",
        children: [
          { path: "", component: DetailsComponent },
          {
            path: "learn",
            component: DetailsCourseComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
