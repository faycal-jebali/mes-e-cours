import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdminComponent } from "./admin.component";
import { DashboardLayoutComponent } from "./main-layout/dashboard-layout/dashboard-layout.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardLayoutComponent,
    children: [
      { path: "", redirectTo: "user", pathMatch: "full" },
      {
        path: "user",
        loadChildren: () =>
          import("./user-management/user-management.module").then(
            (mod) => mod.UserManagementModule
          ),
      },
      {
        path: "course",
        loadChildren: () =>
          import("./course-management/course-management.module").then(
            (mod) => mod.CourseManagementModule
          ),
      },
      {
        path: "category",
        loadChildren: () =>
          import("./category-management/category-management.module").then(
            (mod) => mod.CategoryManagementModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
