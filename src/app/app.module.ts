import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
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

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MyAccountComponent } from "./client/account/my-account/my-account.component";
import { MyCoursesComponent } from "./client/account/my-courses/my-courses.component";
import { ClientModule } from "./client/client.module";
import { CoursesComponent } from "./client/courses/courses.component";
import { AuthGuard } from "./shared/guards/auth.guard";
import { AuthService } from "./shared/services/auth.service";
import { CoursesService } from "./shared/services/courses.service";
import { TokenInterceptor } from "./shared/services/token.interceptor";
import { UserService } from "./shared/services/user.service";
import { SharedModule } from "./shared/shared.module";

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    MyAccountComponent,
    MyCoursesComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
  providers: [
    UserService,
    AuthService,
    AuthGuard,
    CoursesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
