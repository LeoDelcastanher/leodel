import { Component, OnInit } from '@angular/core';

@Component({
    selector: '[app-about-me]',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
    standalone: false
})
export class AboutMeComponent implements OnInit {

  codeExperience = [
    { main: 'AI',                info: ['Claude Code', 'Codex', 'Figma AI'] },
    { main: 'Leadership',        info: ['Code Review', 'Mentoring', 'Sprint Planning', 'Cross-functional Collaboration', 'Stakeholder Communication'] },
    { main: 'Communication',     info: ['Remote-first', 'Fluent English', 'Global teams', 'Agile/Scrum'] },
    { main: 'UI/Design Systems', info: ['SCSS/BEM', 'Bootstrap', 'Material Design', 'Responsive Design', 'Component Architecture', 'a11y'] },
    { main: 'Automation',        info: ['N8N', 'CI/CD', 'Git', 'Git Flow', 'Docker', 'GitHub Actions', 'ESLint'] },
    { main: 'Frameworks',        info: ['Angular 2+', 'AngularJS', 'React', 'RxJS'] },
    { main: 'Languages',         info: ['TypeScript', 'JavaScript', 'Node.js', 'REST APIs'] },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
