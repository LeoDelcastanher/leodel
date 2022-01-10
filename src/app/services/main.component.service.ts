import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ExperienceBox} from "../../Interfaces/experience.box.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainComponentService {

  constructor(private http: HttpClient) {
  }

  getAcademicExperienceList(): Promise<Array<ExperienceBox>> {
    console.log('getAcademicExperienceList()');
    const url = 'assets/data/academic.exp.json';
    return new Promise((resolve, reject) => {
      return this.http.get<Array<ExperienceBox>>(url).subscribe(
        (response) => {
          console.log(response);
          setTimeout(() => {
            resolve(response);
          }, 300)
        },
        (error) => {
          // @Todo Error Notification
          console.error(error);
          console.error('Error happened but I still have not developed a notification method.');
        }
      );
    })
  }

  getWorkExperienceList(): Promise<Array<ExperienceBox>> {
    console.log('getWorkExperienceList()');
    const url = 'assets/data/work.exp.json';
    return new Promise((resolve, reject) => {
      return this.http.get<Array<ExperienceBox>>(url).subscribe(
        (response) => {
          console.log(response);
          setTimeout(() => {
            resolve(response);
          }, 300)
        },
        (error) => {
          // @Todo Error Notification
          console.error(error);
          console.error('Error happened but I still have not developed a notification method.');
        }
      );
    })
  }
}
