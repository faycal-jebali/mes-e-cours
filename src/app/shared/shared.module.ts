import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService, TranslateStore, TranslateLoader } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { ItemCarrouselComponent } from './components/carrousel/item-carrousel/item-carrousel.component';
import { CascadingCardComponent } from './components/cascading-card/cascading-card.component';
import { CascadingPanelComponent } from './components/cascading-panel/cascading-panel.component';
import {
  InputSimpleFilterComponent,
} from './components/input/input-checkbox-list/input-simple-filter/input-simple-filter.component';
import { ModalComponent } from './components/modal/modal.component';
import { NotificationModule } from './components/notification/notification.module';
import { OverlayCardComponent } from './components/overlay-card/overlay-card.component';
import { PanelComponent } from './components/panel/panel.component';
import { AdresseFormComponent } from './components/users/adresse-form/adresse-form.component';
import { ContactFormComponent } from './components/users/contact-form/contact-form.component';
import { IdentiteFormComponent } from './components/users/identite-form/identite-form.component';
import { HttpClient } from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatInputModule, MatButtonModule,
    MatSelectModule, MatIconModule,
    MatToolbarModule, MatMenuModule,
    MatCheckboxModule, MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatFormFieldModule,
    MatRadioModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NotificationModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      },
      defaultLanguage: 'fr'

    }),
  ],
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
  exports: [
    MDBBootstrapModule,
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
    TranslateModule,
  ],
  providers: [TranslateService, TranslateStore],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
