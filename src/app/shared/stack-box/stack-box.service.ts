import {Injectable} from "@angular/core";
import {StackBoxInterface} from "./stack-box.interface";

@Injectable({
  providedIn: 'root'
})
export class StackBoxService {
  taskMap: StackBoxInterface[] = [
    {
      tag: 'JAVASCRIPT',
      label: 'JS',
      url: 'https://www.javascript.com/',
      title: 'JavaScript`s website made by Pluralsight.',
      color: '#FFA000'
    },
    {
      tag: 'ANGULARJS',
      label: 'AngularJS'
    }
    // "ANGULARJS",
    // "HTML",
    // "CSS",
    // "SASS",
    // "GRUNT",
    // "GITFLOW",
    // "BOOTSTRAP3",
    // "FONTAWESOME",
    // "TYPESCRIPT",
    // "ANGULAR",
    // "BOOTSTRAP5",
    // "GITACTIONS",
  ];

  constructor() {
  }

  getTaskType(taskTag: string): StackBoxInterface {
    let foundTask = this.taskMap.find((task) => {
      return task.tag == taskTag;
    })
    if(!foundTask) {
      foundTask = {
        tag: taskTag,
        label: taskTag
      }
    }
    return foundTask;
  }
}
