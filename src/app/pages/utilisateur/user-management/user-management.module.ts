import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserManagementComponent } from './user-management.component';
import { IdentiteFormComponent } from './identite-form/identite-form.component';
import { AdresseFormComponent } from './adresse-form/adresse-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UsersComponent } from './users/users.component';

import { UserService } from '../../../services/user.service';
import { HttpModule } from '@angular/http';
import { User } from '../../../business-objects/user';

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

} from '@angular/material';

@NgModule({
  declarations: [
    UserManagementComponent,
    IdentiteFormComponent,
    AdresseFormComponent,
    ContactFormComponent,
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
