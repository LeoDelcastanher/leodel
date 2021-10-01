import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-box-sizing',
  templateUrl: './box-sizing.component.html',
  styleUrls: ['./box-sizing.component.scss']
})
export class BoxSizingComponent implements OnInit {
  boxSpecs = {
    x: 10 * 10,
    y: 10 * 10,
    z: 10 * 10,
  };

  boxStyles = {front: {}, back: {}, right: {}, left: {}, top: {}, bottom: {},};

  constructor() {
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.updateStyle();
  }

  applyStyles() {
    this.boxStyles = {
      front: {
        transform: `translatez(${this.boxSpecs.z / 2}px)`,
        width: `${this.boxSpecs.x}px`, height: `${this.boxSpecs.y}px`,
      },
      back: {
        transform: `rotateY(180deg) translatez(${this.boxSpecs.z / 2}px)`,
        width: `${this.boxSpecs.x}px`, height: `${this.boxSpecs.y}px`,
      },
      right: {
        transform: `rotateY(90deg) translatez(${this.boxSpecs.x / 2}px)`,
        width: `${this.boxSpecs.z}px`, height: `${this.boxSpecs.y}px`,
      },
      left: {
        transform: `rotateY(270deg) translatez(${this.boxSpecs.x / 2}px)`,
        width: `${this.boxSpecs.z}px`, height: `${this.boxSpecs.y}px`,
      },
      top: {
        transform: `translateY(-${this.boxSpecs.y / 2}px) rotateX(90deg)`,
        width: `${this.boxSpecs.x}px`, height: `${this.boxSpecs.z}px`,
      },
      bottom: {
        transform: `translateY(${this.boxSpecs.y / 2}px) rotateX(90deg)`,
        width: `${this.boxSpecs.x}px`, height: `${this.boxSpecs.z}px`,
      },
    };
  }

  updateStyle() {
    console.log('updateStyle()');
    this.applyStyles();
  }
}
