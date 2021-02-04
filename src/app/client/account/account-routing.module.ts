import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountComponent } from "./account.component";
import { MyAccountComponent } from "./my-account/my-account.component";
import { MyCoursesComponent } from "./my-courses/my-courses.component";

const routes: Routes = [
  {
    path: "",
    component: AccountComponent,
    children: [
      {
        path: "",
        component: MyAccountComponent,
        data: { title: "Mon Compte" },
      },
      {
        path: "courses",
        component: MyCoursesComponent,
        data: { title: "Mes cours" },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
