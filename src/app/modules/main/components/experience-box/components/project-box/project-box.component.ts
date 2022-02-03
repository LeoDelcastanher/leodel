import {Component, Input} from "@angular/core";
import {ProjectBox} from "../../../../../../Interfaces/project-box.interface";

@Component({
  selector: 'project-box',
  templateUrl: './project-box.component.html',
  styleUrls: ['./project-box.component.scss']
})
export class ProjectBoxComponent {
  @Input() project: ProjectBox | any;
  projectsOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleProjects() {
    this.projectsOpen = !this.projectsOpen;
  }
}
