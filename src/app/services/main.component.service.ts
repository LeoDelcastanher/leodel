import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ExperienceBox} from "../Interfaces/experience.box.interface";
import {Observable, Subscriber} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainComponentService {

  constructor(private http: HttpClient) {
  }

  getAcademicExperienceList(): Observable<ExperienceBox[]> {
    const url = 'assets/data/academic.exp.json';
    return new Observable((observer: Subscriber<ExperienceBox[]>) => {
      return this.http.get<ExperienceBox[]>(url).subscribe(
        (response) => {
          setTimeout(() => {
            observer.next(response);
          }, 300)
        },
        (error) => {
          // @Todo Error Notification
          console.error(error);
          console.error('Error happened but I still have not developed a notification method.');
          observer.error(error);
        }
      );
    });
  }

  getWorkExperienceList(): Observable<ExperienceBox[]> {
    const url = 'assets/data/work.exp.js';
    return new Observable((observer: Subscriber<ExperienceBox[]>) => {
      return this.http.get<ExperienceBox[]>(url).subscribe(
        (response) => {
          setTimeout(() => {
            observer.next(response);
          }, 300)
        },
        (error) => {
          // @Todo Error Notification
          console.error(error);
          console.error('Error happened but I still have not developed a notification method.');
          observer.error(error);
        }
      );
    });
  }
}
