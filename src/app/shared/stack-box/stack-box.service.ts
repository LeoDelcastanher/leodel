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
    },
    {
      tag: 'ANGULARJS',
      label: 'AngularJS'
    },
    {
      tag: 'HTML',
      label: 'HTML'
    },
    {
      tag: 'CSS',
      label: 'CSS'
    },
    {
      tag: 'SASS',
      label: 'SASS'
    },
    {
      tag: 'GRUNT',
      label: 'Grunt'
    },
    {
      tag: 'GITFLOW',
      label: 'GIt Flow'
    },
    {
      tag: 'BOOTSTRAP3',
      label: 'Bootstrap 3'
    },
    {
      tag: 'FONTAWESOME',
      label: 'FontAwesome'
    },
    {
      tag: 'TYPESCRIPT',
      label: 'TypeScript'
    },
    {
      tag: 'ANGULAR',
      label: 'Angular'
    },
    {
      tag: 'BOOTSTRAP5',
      label: 'Bootstrap 5'
    },
    {
      tag: 'GITACTIONS',
      label: 'Git Actions'
    },
    {
      tag: 'PHP',
      label: 'PHP'
    },
    {
      tag: 'ZENDFRAMEWORK',
      label: 'Zend Framework'
    },
    {
      tag: 'JQUERY',
      label: 'JQuery'
    },
    {
      tag: 'GIT',
      label: 'Git'
    }
  ];

  constructor() {
  }

  getTaskType(taskTag: string): StackBoxInterface {
    let foundTask = this.taskMap.find((task) => {
      return task.tag == taskTag;
    })
    if (!foundTask) {
      foundTask = {
        tag: taskTag,
        label: taskTag
      }
    }
    return foundTask;
  }
}
