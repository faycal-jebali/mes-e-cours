import { CommonModule } from "@angular/common";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { ClientRoutingModule } from "./client-routing.module";
import { DetailsCourseComponent } from "./details-course/details-course.component";
import { DetailsComponent } from "./details/details.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { BanniereComponent } from "./main-layout/banniere/banniere.component";
import { FooterComponent } from "./main-layout/footer/footer.component";
import { FrontLayoutComponent } from "./main-layout/front-layout/front-layout.component";
import { NavigationComponent } from "./main-layout/navigation/navigation.component";

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    DetailsCourseComponent,
    DetailsComponent,
    FrontLayoutComponent,
    FooterComponent,
    NavigationComponent,
    BanniereComponent,
  ],
  imports: [SharedModule, CommonModule, ClientRoutingModule],
  exports: [
    HomeComponent,
    LoginComponent,
    DetailsCourseComponent,
    DetailsComponent,
    FrontLayoutComponent,
    FooterComponent,
    NavigationComponent,
    BanniereComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class ClientModule {}
