import {Injectable} from '@angular/core';
import {MyNotification} from "../Interfaces/my-notification";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyNotificationService {
  private notificationsArray: MyNotification[] = [];
  private notificationObservable = new Subject<MyNotification[]>()

  constructor() {
  }

  get notifications(): Observable<any> {
    return this.notificationObservable.asObservable();
  }

  addNotification(newNotification: MyNotification): void {
    newNotification.timestamp = new Date().valueOf();
    this.notificationsArray.push(newNotification);
    this.notificationObservable.next(this.notificationsArray);
    this.notificationLifeCycle(newNotification);
  }

  notificationLifeCycle(newNotification: MyNotification): void {
    setTimeout(() => {
      this.notificationsArray[this.notificationsArray.length - 1].open = true;
      this.notificationObservable.next(this.notificationsArray);

      const defaultDuration = 3000;
      if(newNotification.duration === true) {
        setTimeout(() => {
          this.removeMyNotification(newNotification);
        }, defaultDuration);
        return;
      }

      if(newNotification.duration === false) {
        return;
      }

      if(!isNaN(newNotification.duration as number)) {
        setTimeout(() => {
          this.removeMyNotification(newNotification);
        }, newNotification.duration as number);
        return;
      }

      setTimeout(() => {
        newNotification.open = false;
        this.notificationObservable.next(this.notificationsArray);
      }, defaultDuration);
    }, 100);
  }

  removeMyNotification(oldNotification: MyNotification): void {
    oldNotification.open = false;
    this.notificationObservable.next(this.notificationsArray);
    setTimeout(() => {
      this.notificationsArray = this.notificationsArray.filter(i => i.timestamp !== oldNotification.timestamp);
      this.notificationObservable.next(this.notificationsArray);
    }, 600);
  }

  advanceNotificationLifeCycle(myNot: MyNotification): void {
    if (myNot.open) {
      myNot.open = false;
      this.notificationObservable.next(this.notificationsArray);
      this.removeMyNotification(myNot);
      return;
    }
    myNot.open = true;
    this.notificationObservable.next(this.notificationsArray);
  }
}
