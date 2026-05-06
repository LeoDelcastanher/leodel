import { Component, OnInit } from '@angular/core';

@Component({
    selector: '[app-about-me]',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
    standalone: false
})
export class AboutMeComponent implements OnInit {

  codeExperience = [
    { main: 'AI',                info: 'Claude Code, Codex, Figma AI' },
    { main: 'Automation',        info: 'N8N, CI/CD, Git, Git Flow' },
    { main: 'Frameworks',        info: 'Angular 2+, AngularJS, React' },
    { main: 'Languages',         info: 'TypeScript, JavaScript, Node.js' },
    { main: 'UI/Design Systems', info: 'SCSS/BEM, Bootstrap, Material Design' },
    { main: 'Communication',     info: 'Remote-first, Fluent English, Global teams' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
