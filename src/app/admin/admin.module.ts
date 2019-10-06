import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './admin.component';
import { UserService } from '../services/user.service';
import { HttpModule } from '@angular/http';
import { User } from '../business-objects/user';
import { UsersComponent } from './user-management/users/users.component';
import { NewUserComponent } from './user-management/new-user/new-user.component';
import { EditUserComponent
 } from './user-management/edit-user/edit-user.component';
import { SharedModule } from '../shared/shared.module';

import { Routes, RouterModule } from '@angular/router';


import {
  MatInputModule, MatButtonModule,
  MatSelectModule, MatIconModule,
  MatToolbarModule, MatMenuModule,
  MatCheckboxModule, MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatFormFieldModule,
  MatRadioModule,
  MatTableModule,

} from '@angular/material';
// Training
import { FormationsComponent } from './formation-management/formations/formations.component';
import { EditFormationComponent } from './formation-management/edit-formation/edit-formation.component';
import { NewFormationComponent } from './formation-management/new-formation/new-formation.component';

// Category
import { CategoriesComponent } from './category-management/categories/categories.component';
import { NewCategoryComponent } from './category-management/new-category/new-category.component';
import { EditCategoryComponent } from './category-management/edit-category/edit-category.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { FileSelectDirective } from 'ng2-file-upload';

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
    FileSelectDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
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
    FileSelectDirective,
    CKEditorModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
