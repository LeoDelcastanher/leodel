import { Component } from '@angular/core';
import { ExperienceBox } from '../../Interfaces/experience.box.interface';
import workExpData from '../../../assets/data/work.exp.json';
import academicExpData from '../../../assets/data/academic.exp.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: false
})
export class MainComponent {
  workHistory: ExperienceBox[] = workExpData as unknown as ExperienceBox[];
  academicHistory: ExperienceBox[] = academicExpData as unknown as ExperienceBox[];
}
