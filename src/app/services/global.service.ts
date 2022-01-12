import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  comicSansSify: boolean = false;
  comicSansSifyClass = 'comic-sans-sify';

  constructor() {
  }

  public initComicSansSify(): void {
    const savedData = localStorage.getItem(this.comicSansSifyClass);
    if (savedData) {
      const checkedData = JSON.parse(savedData);
      if(checkedData) {
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
}
