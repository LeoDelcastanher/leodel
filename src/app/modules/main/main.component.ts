import {Component, OnInit} from '@angular/core';
import {ExperienceBox} from "../../../Interfaces/experience.box.interface";
import {MainComponentService} from "../../services/main.component.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  academicHistory: Array<ExperienceBox> = [];
  workHistory: Array<ExperienceBox> = [];

  constructor(private mainService: MainComponentService) {
  }

  ngOnInit(): void {
    this.getAcademicExp();
    this.getWorkExp();
  }

  getAcademicExp(): void {
    this.mainService.getAcademicExperienceList().then(
      (response) => {
        this.academicHistory = response as Array<ExperienceBox>;
      },
      (error) => {
        //@TODO
      }
    );
  }

  getWorkExp(): void {
    this.mainService.getWorkExperienceList().then(
      (response) => {
        this.workHistory = response as Array<ExperienceBox>;
      },
      (error) => {
        //@TODO
      }
    );
  }

}
