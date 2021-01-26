export class Notification {
  type: NotificationType;
  title: string;
  message: string;
}

export enum NotificationType {
  Success,
  Error,
  Info,
  Warning
}

export class Link {
  internal: boolean;
  text: string;
  url: string;
}

export class MessageNotification {
  type: string;
  title: string;
  message: string;
}
