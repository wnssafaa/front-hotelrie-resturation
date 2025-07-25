import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private readonly STORAGE_KEY = 'commandNotifications';
  notifications: any[] = [];
  notification: any[] = [];
  public newNotificationsSubject = new BehaviorSubject<number>(0);

  constructor() {
    this.loadNotifications();
  }

  private loadNotifications(): void {
    const storedNotifications = localStorage.getItem(this.STORAGE_KEY);
    if (storedNotifications) {
      this.notifications = JSON.parse(storedNotifications);
    }
  }

  private saveNotifications(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.notifications));
  }

  addCommandNotification(notification: any): void {
    this.notifications.push(notification);
    this.saveNotifications();
    this.notification.push(notification);
    const currentCount = this.newNotificationsSubject.value;
    this.newNotificationsSubject.next(currentCount + 1);
  }

  getNewCommandNotifications(): any[] {
    return this.notification;

  }

  getAllCommandNotifications(): any[] {
    return this.notifications;
  }
}
