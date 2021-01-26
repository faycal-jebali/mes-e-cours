import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

import { Notification, NotificationType, Link, MessageNotification } from './notification.model';

@Injectable()
export class NotificationService {

  data = new MessageNotification();
  links: Link[] = [];

  private readonly listeNotifications = new Subject<Notification>();
  hasError = new BehaviorSubject<boolean>(false);
  dataNotification = new BehaviorSubject<MessageNotification>(this.data);
  linksNotifications = new BehaviorSubject<Link[]>(this.links);

  private keepAfterRouteChange = false;

  constructor (
    private readonly router: Router,
    private readonly httpClient: HttpClient,
    ) {
    this.data.type = 'Oups !';
    this.data.title = `Une erreur technique est survenue.`;
    this.data.message = `Veuillez réessayer ultérieurement ou nous contacter.`;
    this.links[0] = new Link();
    this.links[0].internal = true;
    this.links[0].text = `Page d'accueil`;
    this.links[0].url = '/';

    this.dispalyErrorPage(this.hasError.getValue());
    this.linksNotifications.next(this.links);
    // clear notification messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(event => {
      if (event instanceof NavigationStart && this.keepAfterRouteChange) {
        // only keep for a single route change
        this.keepAfterRouteChange = false;
      }
    });
  }

  dispalyErrorPage(display: boolean, text?, buttons?) {
    this.hasError.next(display);
    if (text) {
      this.dataNotification.next(text);
    } else {
      this.dataNotification.next(this.data);
    }
    if (buttons) {
      this.linksNotifications.next(buttons);
    } else {
      this.linksNotifications.next(this.links);
    }
  }

  getNotification(): Observable<any> {
    return this.listeNotifications.asObservable();
  }

  success(title: string, message: string) {
    this.notificationMessage(NotificationType.Success, title, message);
  }

  error(title: string, message: string, error, displayAlert = true) {
    this.notificationMessageError(NotificationType.Error, title, message, error, displayAlert);
  }

  info(title: string, message: string) {
    this.notificationMessage(NotificationType.Info, title, message);
  }

  warn(title: string, message: string) {
    this.notificationMessage(NotificationType.Warning, title, message);
  }

  /**
   * Notiffication Message (Success, Info ou Warn)
   * @param {NotificationType} type
   * @param {string} title
   * @param {string} message
   * @param {boolean} keepAfterRouteChange
   */
  notificationMessage(type: NotificationType, title: string, message: string) {
    this.listeNotifications.next({ type, title, message } as Notification);
  }

  /**
   * Notification Message d'erreur
   * @param {NotificationType} type de message
   * @param {string} message à afficher
   * @param error l'objet d'erreur
   * @param {boolean} displayAlert contrôler l'affichage la pop-in
   */
  notificationMessageError(type: NotificationType, title: string, message: string, error, displayAlert = false ) {
    if (displayAlert) {
      this.listeNotifications.next({ type, title, message } as Notification);
    }
    console.log(`${message} : `, error);
  }

  clear() {
    // clear notifications
    this.listeNotifications.next();
  }

  /**
   * get
   * @param {string} url
   * @param options
   * @returns {Observable<ArrayBuffer>}
   */
  get(url: string, options?): Observable<ArrayBuffer> {
    return this.httpClient.get(url, options);
  }


  getErrorMessageNotification(error): string {
    let messageError = '';
    if (typeof error.error === 'string'){
      messageError = error.error;
    } else if (error.error.apierror && error.error.apierror.message) {
      messageError = error.error.apierror.message;
    } else if (error.message) {
      messageError = error.message;
    }
    return messageError;
  }
}
