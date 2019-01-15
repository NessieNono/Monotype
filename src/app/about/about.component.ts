import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

// Additional resources 
import { Resource } from '../models/Resource';
import { LinksService } from '../links.service';


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


  private links:Resource[] = this.ls.getLinks();
  private resources:Resource[] = this.ls.getResources();




  private features:String[] = [ 
    "Perform CRUD operations on written entries", 
    "Makes use of Reactive Forms and form validation", 
    "Includes Angular Routes, Services, Directives and user-friendly Animations",
    "Mobile-responsive design"
  ];






  constructor(private ls:LinksService) { }

  ngOnInit() {
  }

}
