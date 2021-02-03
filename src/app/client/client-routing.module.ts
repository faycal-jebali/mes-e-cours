import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "../shared/guards/auth.guard";
import { HomeComponent } from "./home/home.component";
import { FrontLayoutComponent } from "./main-layout/front-layout/front-layout.component";

const routes: Routes = [
  {
    path: "",
    component: FrontLayoutComponent,
    children: [
      { path: "", component: HomeComponent },
      {
        path: "courses",
        loadChildren: () =>
          import("./courses/courses.module").then((mod) => mod.CoursesModule),
      },
      {
        path: "my-account",
        loadChildren: () =>
          import("./account/account.module").then((mod) => mod.AccountModule),
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
