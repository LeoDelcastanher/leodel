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
    // @TODO check local storage
    if(this.comicSansSify) {
      this.toggleBodyClass(this.comicSansSifyClass);
    }
  }

  public toggleComicSansSify(): void {
      this.toggleBodyClass(this.comicSansSifyClass);
  }

  public toggleBodyClass(className: string) {
    console.log(`toggleBodyClass(${className})`);
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
