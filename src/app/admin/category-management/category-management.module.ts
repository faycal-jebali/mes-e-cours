import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { CategoryManagementRoutingModule } from "./category-management-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, CategoryManagementRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class CategoryManagementModule {}
