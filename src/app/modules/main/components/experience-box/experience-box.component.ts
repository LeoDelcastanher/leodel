import {Component, Input, OnInit} from '@angular/core';
import {ExperienceBox} from "../../../../Interfaces/experience.box.interface";

@Component({
  selector: 'app-experience-box',
  templateUrl: './experience-box.component.html',
  styleUrls: ['./experience-box.component.scss']
})
export class ExperienceBoxComponent implements OnInit {
@Input() list: Array<ExperienceBox> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
