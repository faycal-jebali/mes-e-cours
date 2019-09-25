import { ModalComponent } from './components/modal/modal.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CascadingPanelComponent } from './components/cascading-panel/cascading-panel.component';
import { CascadingCardComponent } from './components/cascading-card/cascading-card.component';
import { OverlayCardComponent } from './components/overlay-card/overlay-card.component';
import { PanelComponent } from './components/panel/panel.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { RouterModule } from '@angular/router';
import { ItemCarrouselComponent } from './components/carrousel/item-carrousel/item-carrousel.component';
import { AdresseFormComponent } from './components/users/adresse-form/adresse-form.component';
import { ContactFormComponent } from './components/users/contact-form/contact-form.component';
import { IdentiteFormComponent } from './components/users/identite-form/identite-form.component';
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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
  ],
  exports: [
    MDBBootstrapModule,
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
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
