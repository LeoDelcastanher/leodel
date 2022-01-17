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
  // notifications: MyNotification[] = [
  //   {
  //     title: 'Notification Title',
  //     message: 'Message here of your problem. Gotta fix this man...',
  //     duration: 300,
  //     type: 'error',
  //     open: false
  //   },
  //   {
  //     title: 'All Good Bro!',
  //     message: 'Nice Work!',
  //     duration: 300,
  //     type: 'success',
  //     open: false
  //   },
  //   {
  //     title: 'Check Yoself',
  //     message: 'Take a look in the mirror pal. Whats with the tie? Red belt? Zebra skin shoes...',
  //     duration: 300,
  //     type: 'warning',
  //     open: false
  //   },
  //   {
  //     title: 'It`s raining',
  //     message: 'Really. Check it out!',
  //     duration: 300,
  //     type: 'info',
  //     open: false
  //   },
  // ];

  constructor(public myNotification: MyNotificationService) {
  }

  ngOnInit(): void {
    this.myNotification.notifications
      .subscribe((info) => {
        this.notifications = info;
      });
    // this.notificationService.notification$
    //   .pipe(takeUntil(this.destroyStream$))
    //   .subscribe((message: string) => {
    //     this.doSomeMagic(message)
    //   })
  }

  getNotificationClasses(notification: MyNotification) {
    let classes = [notification.type as string];
    if (notification.open) {
      classes.push('open');
    }
    return classes;
  }

}
