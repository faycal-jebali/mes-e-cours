import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FileUploadModule } from "ng2-file-upload";

import { UserService } from "../shared/services/user.service";
import { SharedModule } from "../shared/shared.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { CategoryManagementModule } from "./category-management/category-management.module";

@NgModule({
  declarations: [AdminComponent],
  imports: [
    SharedModule,
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule,
  ],
  providers: [UserService],
  exports: [AdminComponent, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AdminModule {}
