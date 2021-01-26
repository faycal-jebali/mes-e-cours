import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { zip } from "rxjs";

import { Link, MessageNotification } from './../notification.model';
import { NotificationService } from "../notification.service";

@Component({
  selector: 'shared-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.scss']
})
export class NotificationPageComponent implements OnInit {
  data = new MessageNotification();
  links: Link[] = [];

  constructor(
    private readonly router: Router,
    private readonly notificationService: NotificationService,
  ) {
    // zip(
    //   this.notificationService.dataNotification,
    //   this.notificationService.linksNotifications,
    // ).subscribe(
    //   (data) => {
    //     if (data) {
    //       this.data = data[0];
    //       this.links = data[1];
    //     }
    //   });
  }

  ngOnInit() {}

  /**
   * navigation
   * @param link
   */
  goToUrl(link) {
    // Différencier l'ouverture de lien soit interne (même fenêtre) ou externe ( nouvelle fenêtre)
    if (link.internal) {
      // Faire disparaître la page Erreur
      this.notificationService.dispalyErrorPage(false, null, null);
      this.router.navigateByUrl(link.url);
    } else {
      window.open(link.url, '_self');
    }
  }

}
