import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { Notification, NotificationType } from './../notification.model';
import { NotificationService } from './../notification.service';

@Component({
  selector: 'shared-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {


  notifications: Notification[] = [];
  iconNotification = 'fa-times';

  constructor(
    private readonly notificationService: NotificationService,
  ) { }

  ngOnInit() {
    this.notificationService.getNotification().subscribe(
      (notification: Notification) => {
        if (!notification) {
          // clear notifications when an empty notification is received
          this.notifications = [];
          return;
        }
        // add notification to array
        this.notifications.push(notification);
        setTimeout(() => { this.removeNotification(notification); }, 10000);
      }
    );
  }

  removeNotification(notification: Notification) {
    this.notifications = this.notifications.filter(x => x !== notification);
  }

  cssClass(notification: Notification): string | undefined {
    if (!notification) {
      return;
    }
    // return css class based on notification type
    switch (notification.type) {
      case NotificationType.Success:
        this.iconNotification = 'fa-check';
        return 'alert alert-success';
      case NotificationType.Error:
        this.iconNotification = 'fa-times';
        return 'alert alert-danger';
      case NotificationType.Info:
        this.iconNotification = 'fa-info';
        return 'alert alert-info';
      case NotificationType.Warning:
        this.iconNotification = 'fa-exclamation';
        return 'alert alert-warning';
    }
  }

  /**
   * Simulation d'une erreur 404.
   */
  fireServerError() {
    this.notificationService
      .get('https://jsonplaceholder.typicode.com/1')
      .subscribe(
        (data) => { },
        (error) => {
          this.notificationService.error('', `Erreur (${error.status}) `, error, true);
        }
      );
  }
}
