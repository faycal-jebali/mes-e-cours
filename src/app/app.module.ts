import { HttpClientModule } from "@angular/common/http";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatRadioModule } from "@angular/material/radio";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { JwtModule } from "@auth0/angular-jwt";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AdminModule } from "./admin/admin.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MyAccountComponent } from "./client/account/my-account/my-account.component";
import { MyCoursesComponent } from "./client/account/my-courses/my-courses.component";
import { ClientModule } from "./client/client.module";
import { CoursesComponent } from "./client/courses/courses.component";
import { DetailsCourseComponent } from "./client/details-course/details-course.component";
import { DetailsComponent } from "./client/details/details.component";
import { HomeComponent } from "./client/home/home.component";
import { LoginComponent } from "./client/login/login.component";
import { BanniereComponent } from "./client/main-layout/banniere/banniere.component";
import { FooterComponent } from "./client/main-layout/footer/footer.component";
import { NavigationComponent } from "./client/main-layout/navigation/navigation.component";
import { AuthGuard } from "./shared/guards/auth.guard";
import { AuthService } from "./shared/services/auth.service";
import { CoursesService } from "./shared/services/courses.service";
import { RestService } from "./shared/services/rest.service";
import { UserService } from "./shared/services/user.service";
import { SharedModule } from "./shared/shared.module";

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavigationComponent,
    BanniereComponent,
    CoursesComponent,
    MyAccountComponent,
    MyCoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:(5100)"],
        blacklistedRoutes: ["localhost:5100/api/auth"],
      },
    }),
    NgbModule,
    MatRadioModule,
    MatExpansionModule,
    ClientModule,
  ],
  providers: [UserService, AuthService, AuthGuard, CoursesService, RestService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
