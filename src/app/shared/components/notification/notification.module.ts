import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { NotificationPageComponent } from './notification-page/notification-page.component';
import { NotificationsRoutingModule } from './notification-routin.module';
import { NotificationService } from './notification.service';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NotificationsRoutingModule,
  ],
  declarations:[
    NotificationComponent,
    NotificationPageComponent,
  ],
  exports: [
    NotificationComponent,
    NotificationPageComponent,
    NotificationsRoutingModule,
  ]
  ,providers: [
    NotificationService,
  ]
})
export class NotificationModule { }
