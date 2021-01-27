import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { BanniereComponent } from './main-layout/banniere/banniere.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { NavigationComponent } from './main-layout/navigation/navigation.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { DetailsCourseComponent } from './pages/details-course/details-course.component';
import { DetailsComponent } from './pages/details/details.component';
import { FormationsPageComponent } from './pages/formations-page/formations-page.component';
import { MesFormationsComponent } from './pages/utilisateur/mes-formations/mes-formations.component';
import { MonCompteComponent } from './pages/utilisateur/mon-compte/mon-compte.component';
import { AuthService } from './services/auth.service';
import { FormationsService } from './services/formations.service';
import { RestService } from './services/rest.service';
import { UserService } from './services/user.service';
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
    LoginComponent,
    DetailsComponent,
    DetailsCourseComponent,
    FormationsPageComponent,
    MonCompteComponent,
    MesFormationsComponent,  
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AdminModule,
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
    SharedModule,
    MatRadioModule,
    MatExpansionModule,
  ],
  providers: [
    UserService,
    AuthService,
    AuthGuard,
    FormationsService,
    RestService,
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
