import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CategoriesComponent } from "./categories/categories.component";
import { EditCategoryComponent } from "./edit-category/edit-category.component";
import { NewCategoryComponent } from "./new-category/new-category.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "all",
        component: CategoriesComponent,
      },
      {
        path: "new",
        component: NewCategoryComponent,
      },
      {
        path: "edit/:id",
        component: EditCategoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryManagementRoutingModule {}
