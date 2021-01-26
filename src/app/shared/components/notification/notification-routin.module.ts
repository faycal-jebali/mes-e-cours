import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotificationPageComponent } from './notification-page/notification-page.component';

/**
 * Définition des règles de navigation du module exemple.
 */
const notificationsRoutes: Routes = [
  { path: '**', component: NotificationPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(notificationsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NotificationsRoutingModule {
}
