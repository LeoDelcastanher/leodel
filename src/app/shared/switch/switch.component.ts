import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  @Input() active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.active = !this.active;
  }
}
