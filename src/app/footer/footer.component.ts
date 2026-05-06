import {Component, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {faCodepen, faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {UserLink} from "../Interfaces/userLink";
import {faCat, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {MyNotificationService} from "../services/my-notification.service";
import {GlobalService} from "../services/global.service";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent implements OnInit {
  version = environment.version;

  userLinks: Array<UserLink> = [
    {
      title: 'Leonardo Delcastanher´s Instagram - @leodelcastanher',
      url: 'https://www.instagram.com/leodelcastanher/',
      faIcon: faInstagram,
      label: 'Instagram - @LeoDelcastanher'
    },
    {
      title: 'Leonardo Delcastanher´s LinkedIn - leodelcastanher',
      url: 'https://www.linkedin.com/in/leodelcastanher/',
      faIcon: faLinkedin,
      label: 'LinkedIn - LeoDelcastanher'
    },
    {
      title: 'Leonardo Delcastanher´s Codepen - leodelcastanher',
      url: 'https://codepen.io/leodelcastanher',
      faIcon: faCodepen,
      label: 'CODEPEN - LeoDelcastanher'
    },
    {
      title: 'Leonardo Delcastanher´s GitHub - leodelcastanher',
      url: 'https://github.com/LeoDelcastanher',
      faIcon: faGithub,
      label: 'GitHub - LeoDelcastanher'
    },
    {
      title: 'A website showing my fluffy cat to the world.',
      url: 'https://gatogordo.me/',
      faIcon: faCat,
      label: 'GatoGordo.me'
    },
    {
      title: 'Leonardo Delcastanher´s Email - leodelcastanher@gmail.com',
      copyText: 'leodelcastanher@gmail.com',
      faIcon: faEnvelope,
      label: 'LeoDelcastanher@gmail.com'
    },
  ];


  constructor(
    public myNotification: MyNotificationService,
    public globalService: GlobalService
  ) {
  }

  ngOnInit(): void {
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.myNotification.addNotification({
        title: 'Email copied with success!',
        type: 'success',
        duration: true
      });
    });
  }

}
