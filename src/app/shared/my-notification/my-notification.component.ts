import {Component, OnInit} from '@angular/core';
import {MyNotification} from "../../../Interfaces/my-notification";

@Component({
  selector: 'my-notification',
  templateUrl: './my-notification.component.html',
  styleUrls: ['./my-notification.component.scss']
})
export class MyNotificationComponent implements OnInit {
  notifications: MyNotification[] = [
    {
      title: 'Notification Title',
      message: 'Message here of your problem. Gotta fix this man...',
      duration: 300,
      type: 'error',
      open: false
    },
    {
      title: 'All Good Bro!',
      message: 'Nice Work!',
      duration: 300,
      type: 'success',
      open: false
    },
    {
      title: 'Check Yoself',
      message: 'Take a look in the mirror pal. Whats with the tie? Red belt? Zebra skin shoes...',
      duration: 300,
      type: 'warning',
      open: false
    },
    {
      title: 'It`s raining',
      message: 'Really. Check it out!',
      duration: 300,
      type: 'info',
      open: false
    },
  ];
  opa = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  getNotificationClasses(notification: MyNotification) {
    let classes = [notification.type as string];
    if (notification.open) {
      classes.push('open');
    }
    return classes;
  }

}
