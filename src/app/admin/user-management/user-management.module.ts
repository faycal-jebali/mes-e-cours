import { CommonModule } from "@angular/common";
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
import { AdresseFormComponent } from "./users/adresse-form/adresse-form.component";
import { ContactFormComponent } from "./users/contact-form/contact-form.component";
import { IdentiteFormComponent } from "./users/identite-form/identite-form.component";

@NgModule({
  declarations: [
    UsersListComponent,
    NewUserComponent,
    EditUserComponent,
    MyAccountComponent,
    IdentiteFormComponent,
    AdresseFormComponent,
    ContactFormComponent,
  ],
  imports: [SharedModule, UserManagementRoutingModule],
  exports: [
    UsersListComponent,
    NewUserComponent,
    EditUserComponent,
    MyAccountComponent,
    IdentiteFormComponent,
    AdresseFormComponent,
    ContactFormComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class UserManagementModule {}
