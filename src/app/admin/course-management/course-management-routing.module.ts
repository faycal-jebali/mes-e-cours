import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CoursesListComponent } from "./courses-list/courses-list.component";
import { EditCourseComponent } from "./edit-course/edit-course.component";
import { NewCourseComponent } from "./new-course/new-course.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "all",
        component: CoursesListComponent,
      },
      {
        path: "new",
        component: NewCourseComponent,
      },
      {
        path: "edit/:id",
        component: EditCourseComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseManagementRoutingModule {}
