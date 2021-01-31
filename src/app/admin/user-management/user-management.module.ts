import { CommonModule } from "@angular/common";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";

import { UserManagementRoutingModule } from "./user-management-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, UserManagementRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class UserManagementModule {}
