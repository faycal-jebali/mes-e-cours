import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EditUserComponent } from "./edit-user/edit-user.component";
import { MyAccountComponent } from "./my-account/my-account.component";
import { NewUserComponent } from "./new-user/new-user.component";
import { UsersListComponent } from "./users-list/users-list.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "current",
        component: MyAccountComponent,
      },
      {
        path: "all",
        component: UsersListComponent,
      },
      {
        path: "new",
        component: NewUserComponent,
      },
      {
        path: "edit/:id",
        component: EditUserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}
