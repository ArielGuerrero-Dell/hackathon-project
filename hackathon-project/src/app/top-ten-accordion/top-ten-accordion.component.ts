import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-ten-accordion',
  templateUrl: './top-ten-accordion.component.html',
  styleUrls: ['./top-ten-accordion.component.css']
})
export class TopTenAccordionComponent implements OnInit {
  customClass = 'customClass';
  isFirstOpen = true;
  constructor() { }

  ngOnInit(): void {
  }

}
