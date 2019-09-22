import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserManagementComponent } from './user-management.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UsersComponent } from './users/users.component';

import { UserService } from '../../services/user.service';
import { HttpModule } from '@angular/http';
import { User } from '../../business-objects/user';

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
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    UserManagementComponent,
    NewUserComponent,
    UsersComponent,
    EditUserComponent,
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
  ],
  providers: [
    UserService,
  ],
  exports: [
    UserManagementComponent,
    NewUserComponent,
    UsersComponent,
    EditUserComponent,
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
  ]
})
export class UserManagementModule { }
