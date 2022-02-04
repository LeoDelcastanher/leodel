import {Component, Input} from "@angular/core";
import {StackBoxService} from "./stack-box.service";

@Component({
  selector: 'stack-box',
  templateUrl: './stack-box.component.html',
  styleUrls: ['./stack-box.component.scss']
})
export class StackBoxComponent {
  @Input() stack?: string;
  taskObject: any;

  constructor(private taskService: StackBoxService) {
  }

  ngOnInit(): void {
    if (this.stack) {
      this.taskObject = this.taskService.getTaskType(this.stack);
    }
  }

}
