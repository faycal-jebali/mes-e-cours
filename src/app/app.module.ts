import { HttpClientModule } from "@angular/common/http";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatRadioModule } from "@angular/material/radio";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { JwtModule } from "@auth0/angular-jwt";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AdminModule } from "./admin/admin.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./shared/guards/auth.guard";
import { LoginComponent } from "./client/login/login.component";
import { BanniereComponent } from "./client/main-layout/banniere/banniere.component";
import { FooterComponent } from "./client/main-layout/footer/footer.component";
import { NavigationComponent } from "./client/main-layout/navigation/navigation.component";
import { AccueilComponent } from "./client/home/accueil.component";
import { DetailsCourseComponent } from "./client/details-course/details-course.component";
import { DetailsComponent } from "./client/details/details.component";
import { FormationsPageComponent } from "./client/formations/formations.component";
import { MesFormationsComponent } from "./client/account/my-courses/my-courses.component";
import { MonCompteComponent } from "./client/account/my-account/my-account.component";
import { AuthService } from "./shared/services/auth.service";
import { FormationsService } from "./shared/services/formations.service";
import { RestService } from "./shared/services/rest.service";
import { UserService } from "./shared/services/user.service";
import { SharedModule } from "./shared/shared.module";

export function tokenGetter() {
  return localStorage.getItem("access_token");
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
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:4000"],
        blacklistedRoutes: ["localhost:4000/api/auth"],
      },
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
