import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

import { EditUserComponent } from "./edit-user/edit-user.component";
import { MyAccountComponent } from "./my-account/my-account.component";
import { NewUserComponent } from "./new-user/new-user.component";
import { UserManagementRoutingModule } from "./user-management-routing.module";
import { UsersListComponent } from "./users-list/users-list.component";

@NgModule({
  declarations: [
    UsersListComponent,
    NewUserComponent,
    EditUserComponent,
    MyAccountComponent,
  ],
  imports: [SharedModule, UserManagementRoutingModule],
  exports: [
    UsersListComponent,
    NewUserComponent,
    EditUserComponent,
    MyAccountComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class UserManagementModule {}
