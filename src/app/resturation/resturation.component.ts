import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {NotificationsService} from "./services/notifications.service";

@Component({
  selector: 'app-resturation',

  templateUrl: './resturation.component.html',
  styleUrl: './resturation.component.sass'
})
export class ResturationComponent {
  newNotificationsCount: number = 0;
  constructor( public translateService:TranslateService ,private notificationsService:NotificationsService) {
    this.notificationsService.newNotificationsSubject.subscribe(count => {
      this.newNotificationsCount = count;
    });
  }
  currentLanguage: string = 'en';
  toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'en' ? 'fr' : 'en';
    this.translateService.use(this.currentLanguage);
  }
}
