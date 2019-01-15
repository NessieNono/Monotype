import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'], 
  animations: [
  	trigger('fadeIn', [
  		transition(':enter', [
  			style({opacity: '0'}), 
  			animate('1s ease-out', style({opacity: '1'}))
  			])
  		])
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
