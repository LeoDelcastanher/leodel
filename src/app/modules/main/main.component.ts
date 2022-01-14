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
    this.mainService.getAcademicExperienceList().subscribe(
      (list: ExperienceBox[]) => {
        this.academicHistory = list;
      },
      error => {
        //@TODO
      }
    );
  }

  getWorkExp(): void {
    this.mainService.getWorkExperienceList().subscribe(
      (list:  ExperienceBox[]) => {
        this.workHistory = list;
      },
      (error) => {
        //@TODO
      }
    );
  }
}
