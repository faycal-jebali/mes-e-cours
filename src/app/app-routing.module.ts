import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MonCompteComponent } from "./client/account/my-account/my-account.component";
import { CoursesComponent } from "./client/courses/courses.component";
import { DetailsCourseComponent } from "./client/details-course/details-course.component";
import { DetailsComponent } from "./client/details/details.component";
import { HomeComponent } from "./client/home/home.component";
import { LoginComponent } from "./client/login/login.component";
import { AuthGuard } from "./shared/guards/auth.guard";

// Training
//Category

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "courses",
    component: CoursesComponent,
  },
  {
    path: "courses/:id",
    component: DetailsComponent,
  },
  {
    path: "course/:id",
    component: DetailsCourseComponent,
  },
  {
    path: "mon-compte",
    component: MonCompteComponent,
    data: { title: "Mon Compte" },
    canActivate: [AuthGuard],
  },
  {
    path: "administrator",
    loadChildren: () =>
      import("./admin/admin.module").then((mod) => mod.AdminModule),
  },
  // {
  //   path: "administrator",
  //   component: AdminComponent,
  //   children: [
  //     {
  //       path: "user",
  //       children: [
  //         {
  //           path: "current",
  //           component: MyAccountComponent,
  //         },
  //         {
  //           path: "all",
  //           component: UsersListComponent,
  //         },
  //         {
  //           path: "new",
  //           component: NewUserComponent,
  //         },
  //         {
  //           path: "edit/:id",
  //           component: EditUserComponent,
  //         },
  //       ],
  //     },
  //     {
  //       path: "formation",
  //       children: [
  //         {
  //           path: "all",
  //           component: CoursesComponent,
  //         },
  //         {
  //           path: "new",
  //           component: NewCourseComponent,
  //         },
  //         {
  //           path: "edit/:id",
  //           component: EditCourseComponent,
  //         },
  //       ],
  //     },
  //     {
  //       path: "category",
  //       children: [
  //         {
  //           path: "all",
  //           component: CategoriesComponent,
  //         },
  //         {
  //           path: "new",
  //           component: NewCategoryComponent,
  //         },
  //         {
  //           path: "edit/:id",
  //           component: EditCategoryComponent,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   path: 'administrator/user/all',
  //   component: UsersListComponent,
  // },
  // otherwise redirect to home
  { path: "**", redirectTo: "/" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload",
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
