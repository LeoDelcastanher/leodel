import {Component, OnInit} from '@angular/core';
import {MyNotification} from "../../Interfaces/my-notification";
import {MyNotificationService} from "../../services/my-notification.service";

@Component({
  selector: 'my-notification',
  templateUrl: './my-notification.component.html',
  styleUrls: ['./my-notification.component.scss']
})
export class MyNotificationComponent implements OnInit {
  notifications: MyNotification[] = [];

  constructor(public myNotification: MyNotificationService) {
  }

  ngOnInit(): void {
    this.myNotification.notifications
      .subscribe((info) => {
        this.notifications = info;
      });
  }

  getNotificationClasses(notification: MyNotification) {
    let classes = [notification.type as string];
    if (notification.open) {
      classes.push('open');
    }
    return classes;
  }

}
