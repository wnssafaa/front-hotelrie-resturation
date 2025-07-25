import { Component } from '@angular/core';
import {NotificationsService} from "../../services/notifications.service";


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.sass'
})
export class NotificationsComponent {
  newNotifications: any[] = [];
  allNotifications: any[] = [];
  valide: boolean = true;
  newNotificationsCount: number=0;

  constructor(private notificationsService: NotificationsService) { }
  ngOnInit(): void {
    this.allNotifications = this.notificationsService.getAllCommandNotifications();
    this.newNotifications = this.notificationsService.getNewCommandNotifications();
    this.notificationsService.newNotificationsSubject.subscribe(count => {
      this.newNotificationsCount = count;
    });
  }
  valider(): void {
    this.valide = false;
  }

}
