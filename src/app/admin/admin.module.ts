import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './admin.component';
import { UserService } from '../services/user.service';
import { User } from '../business-objects/user';
import { UsersComponent } from './user-management/users/users.component';
import { NewUserComponent } from './user-management/new-user/new-user.component';
import { EditUserComponent
 } from './user-management/edit-user/edit-user.component';
import { SharedModule } from '../shared/shared.module';

import { Routes, RouterModule } from '@angular/router';


import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
// Training
import { FormationsComponent } from './formation-management/formations/formations.component';
import { EditFormationComponent } from './formation-management/edit-formation/edit-formation.component';
import { NewFormationComponent } from './formation-management/new-formation/new-formation.component';

// Category
import { CategoriesComponent } from './category-management/categories/categories.component';
import { NewCategoryComponent } from './category-management/new-category/new-category.component';
import { EditCategoryComponent } from './category-management/edit-category/edit-category.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { FileUploadModule } from 'ng2-file-upload';
import { MyAccountComponent } from './user-management/my-account/my-account.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    NewUserComponent,
    EditUserComponent,
    FormationsComponent,
    NewFormationComponent,
    EditFormationComponent,
    CategoriesComponent,
    NewCategoryComponent,
    EditCategoryComponent,
    MyAccountComponent,
  ],
  imports: [
    FileUploadModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
    RouterModule,
    SharedModule,
    CKEditorModule,
  ],
  providers: [
    UserService,
  ],
  exports: [
    AdminComponent,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    UsersComponent,
    NewUserComponent,
    EditUserComponent,
    FormationsComponent,
    NewFormationComponent,
    EditFormationComponent,
    CategoriesComponent,
    NewCategoryComponent,
    EditCategoryComponent,
    CKEditorModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
