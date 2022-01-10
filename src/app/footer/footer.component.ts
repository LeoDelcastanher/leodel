import {Component, OnInit} from '@angular/core';
import {faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {UserLink} from "../../Interfaces/userLink";

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
      label: '@LeoDelcastanher'
    },
    {
      title: 'Leonardo Delcastanher´s LinkedIn - leodelcastanher',
      url: 'https://www.linkedin.com/in/leodelcastanher/',
      faIcon: faLinkedin,
      label: 'LinkedIn/in/LeoDelcastanher'
    },
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
