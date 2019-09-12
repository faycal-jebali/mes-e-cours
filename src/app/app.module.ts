import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { TodoService } from './services/todo.service';
import { UserService } from './services/user.service';
import { FormationsService } from './services/formations.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import {
  MatInputModule, MatButtonModule,
  MatSelectModule, MatIconModule,
  MatToolbarModule, MatMenuModule,
  MatCheckboxModule, MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatFormFieldModule,
  MatRadioModule

} from '@angular/material';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { NavigationComponent } from './main-layout/navigation/navigation.component';
import { BanniereComponent } from './main-layout/banniere/banniere.component';
import { SharedModule } from './shared/shared.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductComponent } from './product/product.component';
import { RestService } from './services/rest.service';
import { DetailsComponent } from './pages/details/details.component';
import { FormationsComponent } from './pages/formations/formations.component';
import { MonCompteComponent } from './pages/utilisateur/mon-compte/mon-compte.component';
import { MesFormationsComponent } from './pages/utilisateur/mes-formations/mes-formations.component';
import { AdresseFormComponent } from './pages/utilisateur/mon-compte/adresse-form/adresse-form.component';
import { ContactFormComponent } from './pages/utilisateur/mon-compte/contact-form/contact-form.component';
import { IdentiteFormComponent } from './pages/utilisateur/mon-compte/identite-form/identite-form.component';

import { FileSelectDirective } from 'ng2-file-upload';

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
    ProductAddComponent,
    ProductDetailComponent,
    ProductComponent,
    ProductEditComponent,
    DetailsComponent,
    FormationsComponent,
    MonCompteComponent,
    MesFormationsComponent,
    AdresseFormComponent,
    ContactFormComponent,
    IdentiteFormComponent,
    FileSelectDirective,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatTabsModule,
    MatFormFieldModule,
    SharedModule,
    MatRadioModule,
  ],
  providers: [
    TodoService,
    UserService,
    AuthService,
    AuthGuard,
    FormationsService,
    RestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
