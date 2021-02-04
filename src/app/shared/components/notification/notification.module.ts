import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NotificationPageComponent } from "./notification-page/notification-page.component";
import { NotificationComponent } from "./notification/notification.component";

@NgModule({
  imports: [CommonModule],
  declarations: [NotificationComponent, NotificationPageComponent],
  exports: [NotificationComponent, NotificationPageComponent],
})
export class NotificationModule {}
