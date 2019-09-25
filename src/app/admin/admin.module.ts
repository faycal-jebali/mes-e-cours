import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './admin.component';
import { UserService } from '../services/user.service';
import { HttpModule } from '@angular/http';
import { User } from '../business-objects/user';
import { UserManagementComponent } from './user-management/user-management.component';
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
import { FormationsComponent } from './formation-management/formations/formations.component';
import { EditFormationComponent } from './formation-management/edit-formation/edit-formation.component';
import { NewFormationComponent } from './formation-management/new-formation/new-formation.component';

@NgModule({
  declarations: [
    AdminComponent,
    UserManagementComponent,
    UsersComponent,
    NewUserComponent,
    EditUserComponent,
    FormationsComponent,
    NewFormationComponent,
    EditFormationComponent,
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
    UserManagementComponent,
    UsersComponent,
    NewUserComponent,
    EditUserComponent,
    FormationsComponent,
    NewFormationComponent,
    EditFormationComponent,
  ]
})
export class AdminModule { }
