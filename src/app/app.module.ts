import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { TodoService } from './todo.service';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import {
  MatInputModule, MatButtonModule,
  MatSelectModule, MatIconModule,
  MatToolbarModule, MatMenuModule,
  MatCheckboxModule, MatDatepickerModule,
  MatNativeDateModule,
} from '@angular/material';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { NavigationComponent } from './main-layout/navigation/navigation.component';
import { BanniereComponent } from './main-layout/banniere/banniere.component';
import { SharedModule } from './shared/shared.module';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FooterComponent,
    NavigationComponent,
    BanniereComponent,
    TodoListComponent,
    UserListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4000'],
        blacklistedRoutes: ['localhost:4000/api/auth']
      }
    }),
    NgbModule.forRoot(),    
    BrowserAnimationsModule,
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
    SharedModule,
  ],
  providers: [
    TodoService,
    UserService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
