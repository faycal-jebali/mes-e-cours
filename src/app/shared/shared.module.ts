import { CommonModule } from "@angular/common";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import {
  TranslateModule,
  TranslateService,
  TranslateStore,
  TranslateLoader,
} from "@ngx-translate/core";
import {
  MDBBootstrapModule,
  InputsModule,
  ModalModule,
  MDBRootModule,
  ButtonsModule,
} from "angular-bootstrap-md";

import { CarrouselComponent } from "./components/carrousel/carrousel.component";
import { ItemCarrouselComponent } from "./components/carrousel/item-carrousel/item-carrousel.component";
import { CascadingCardComponent } from "./components/cascading-card/cascading-card.component";
import { CascadingPanelComponent } from "./components/cascading-panel/cascading-panel.component";
import { InputSimpleFilterComponent } from "./components/input/input-checkbox-list/input-simple-filter/input-simple-filter.component";
import { ModalComponent } from "./components/modal/modal.component";
import { NotificationModule } from "./components/notification/notification.module";
import { OverlayCardComponent } from "./components/overlay-card/overlay-card.component";
import { PanelComponent } from "./components/panel/panel.component";
import { AdresseFormComponent } from "./components/users/adresse-form/adresse-form.component";
import { ContactFormComponent } from "./components/users/contact-form/contact-form.component";
import { IdentiteFormComponent } from "./components/users/identite-form/identite-form.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    CascadingPanelComponent,
    CascadingCardComponent,
    OverlayCardComponent,
    PanelComponent,
    ModalComponent,
    CarrouselComponent,
    ItemCarrouselComponent,
    AdresseFormComponent,
    ContactFormComponent,
    IdentiteFormComponent,
    InputSimpleFilterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: "fr",
    }),
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
    MatRadioModule,
    MDBBootstrapModule.forRoot(),
    InputsModule,
    ButtonsModule,
    ModalModule,
    MDBRootModule,
    NotificationModule,
  ],
  providers: [TranslateService, TranslateStore],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TranslateModule,
    MDBBootstrapModule,
    InputsModule,
    ButtonsModule,
    ModalModule,
    MDBRootModule,
    NotificationModule,
    CascadingPanelComponent,
    CascadingCardComponent,
    OverlayCardComponent,
    PanelComponent,
    ModalComponent,
    CarrouselComponent,
    ItemCarrouselComponent,
    AdresseFormComponent,
    ContactFormComponent,
    IdentiteFormComponent,
    InputSimpleFilterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule {}
