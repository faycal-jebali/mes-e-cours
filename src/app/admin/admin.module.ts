import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { FileUploadModule } from "ng2-file-upload";

import { UserService } from "../shared/services/user.service";
import { SharedModule } from "../shared/shared.module";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { CategoriesComponent } from "./category-management/categories/categories.component";
import { EditCategoryComponent } from "./category-management/edit-category/edit-category.component";
import { NewCategoryComponent } from "./category-management/new-category/new-category.component";
import { CoursesListComponent } from "./course-management/courses-list/courses-list.component";
import { EditCourseComponent } from "./course-management/edit-course/edit-course.component";
import { NewCourseComponent } from "./course-management/new-course/new-course.component";
import { EditUserComponent } from "./user-management/edit-user/edit-user.component";
import { MyAccountComponent } from "./user-management/my-account/my-account.component";
import { NewUserComponent } from "./user-management/new-user/new-user.component";
import { UsersListComponent } from "./user-management/users-list/users-list.component";

@NgModule({
  declarations: [
    AdminComponent,
    // categories
    CategoriesComponent,
    NewCategoryComponent,
    EditCategoryComponent,
    // Courses
    CoursesListComponent,
    NewCourseComponent,
    EditCourseComponent,
    // Users
    UsersListComponent,
    NewUserComponent,
    EditUserComponent,
    MyAccountComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatFormFieldModule,
    MatTableModule,
    CKEditorModule,
    // SharedModule,
  ],
  providers: [UserService],
  exports: [
    AdminComponent,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    CKEditorModule,
    MatFormFieldModule,
    CoursesListComponent,
    NewCourseComponent,
    EditCourseComponent,
    CategoriesComponent,
    NewCategoryComponent,
    EditCategoryComponent,
    UsersListComponent,
    NewUserComponent,
    EditUserComponent,
    MyAccountComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AdminModule {}
