import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { CategoryManagementRoutingModule } from "./category-management-routing.module";
import { CategoriesComponent } from "./categories/categories.component";
import { NewCategoryComponent } from "./new-category/new-category.component";
import { EditCategoryComponent } from "./edit-category/edit-category.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    CategoriesComponent,
    NewCategoryComponent,
    EditCategoryComponent,
  ],
  imports: [SharedModule, CategoryManagementRoutingModule],
  exports: [CategoriesComponent, NewCategoryComponent, EditCategoryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class CategoryManagementModule {}
