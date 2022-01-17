import {Injectable} from '@angular/core';
import {MyNotification} from "../Interfaces/my-notification";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  comicSansSify: boolean = false;
  comicSansSifyClass = 'comic-sans-sify';

  notifications: MyNotification[] = [];

  constructor() {
  }

  public initComicSansSify(): void {
    const savedData = localStorage.getItem(this.comicSansSifyClass);
    if (savedData) {
      const checkedData = JSON.parse(savedData);
      if (checkedData) {
        this.comicSansSify = checkedData;
        this.toggleBodyClass(this.comicSansSifyClass);
      }
    }
  }

  public toggleComicSansSify(): void {
    console.warn('toggleComicSansSify()', this.comicSansSify);
    this.comicSansSify = !this.comicSansSify;
    this.toggleBodyClass(this.comicSansSifyClass);
    localStorage.setItem(this.comicSansSifyClass, this.comicSansSify.toString());
  }

  public toggleBodyClass(className: string) {
    const bodyElement = document.body;
    if (bodyElement) {
      if (bodyElement.classList.contains(className)) {
        bodyElement.classList.remove(className);
        return
      } else {
        bodyElement.classList.add(className);
      }
    }
  }

  //* MyNotifications *//
  addNotification(newNotification: MyNotification): void {
    newNotification.timestamp = new Date().valueOf();
    this.notifications.push(newNotification);
    setTimeout(() => {
      this.notifications[this.notifications.length - 1].open = true;
    }, 100)
  }

  removeMyNotification(oldNotification: MyNotification): MyNotification[] {
    this.notifications = this.notifications.filter(i => i.timestamp !== oldNotification.timestamp);
    return this.notifications;
  }

  //* End of MyNotifications *//
}
