import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersListComponent } from "./users-list/users-list.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { NewUserComponent } from "./new-user/new-user.component";
import { MyAccountComponent } from "./my-account/my-account.component";
import { UserManagementRoutingModule } from "./user-management-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, UserManagementRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class UserManagementModule {}
