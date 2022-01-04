import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'my-btn',
  templateUrl: './my-btn.component.html',
  styleUrls: ['./my-btn.component.scss']
})
export class MyBtnComponent implements OnInit {
  @Input() label: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
