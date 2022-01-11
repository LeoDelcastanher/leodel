import {Component, OnInit} from '@angular/core';
import {faCodepen, faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {UserLink} from "../../Interfaces/userLink";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
    // {
    //   title: 'Leonardo Delcastanher´s Email - leodelcastanher@gmail.com',
    //   copyText: 'leodelcastanher@gmail.com',
    //   faIcon: faEnvelope,
    //   label: 'Email - LeoDelcastanher@gmail.com'
    // },
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

  copyToClipboard(text: String): void {
    document.addEventListener('copy', (ev: ClipboardEvent) => {
      // @ts-ignore
      ev.clipboardData.setData('text/plain', text);
      ev.preventDefault();
      // @ts-ignore
      document.removeEventListener('copy', ev);
    });
    document.execCommand('copy');
  }

}
