import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-part',
  templateUrl: './top-part.component.html',
  styleUrls: ['./top-part.component.scss']
})
export class TopPartComponent implements OnInit {
  menuLinks = [
    {label: 'Home', link: 'opa'},
    {label: 'Home2', link: 'opa'},
    {label: 'Home3', link: 'opa'},
    {label: 'Home4', link: 'opa'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
