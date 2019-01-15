import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

// Additional resources 
import { Resource } from '../models/Resource';


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


  private links:Resource[] = [
    {
      name:"fab fa-github", 
      webUrl: "https://github.com/NessieNono/Monotype"
    },
    {
      name: "fas fa-envelope-square",
      webUrl: "mailto:NonoNessie@gmail.com?Subject=Hello!",
    },
    {
      name: "fab fa-linkedin-in", 
      webUrl: "https://www.linkedin.com/in/ruby-bie-100a65164/"
    }, 
    {
      name: "fab fa-instagram",
      webUrl: "https://www.instagram.com/nessienono/",
    },
    {
      name: "fas fa-feather-alt", 
      webUrl: "https://tapas.io/series/birdenly"
    }
  ];





  private features:String[] = [ 
    "Perform CRUD operations on written entries", 
    "Makes use of Reactive Forms and form validation", 
    "Includes Angular Routes, Services, Directives and user-friendly Animations",
    "Mobile-responsive design"
  ];

  private resources:Resource[] = [
    {
      name: "Main Tutorial", 
      webUrl: "https://appdividend.com/2018/11/04/angular-7-crud-example-mean-stack-tutorial/"
    },
    {
      name: "Angular Animations for Loading",
      webUrl: "https://medium.com/@tomastrajan/how-to-style-angular-application-loading-with-angular-cli-like-a-boss-cdd4f5358554"
    }, 
    {
      name: "Enter Leave Animations", 
      webUrl: "https://medium.freecodecamp.org/how-to-use-animation-with-angular-6-675b19bc3496"
    }, 
    {
      name: "Free Ink Splatters", 
      webUrl: "https://every-tuesday.com/freebie-mini-ink-splatter-textures/"
    }, 
    {
      name: "Inspiration", 
      webUrl: "https://medium.com/new-story"
    }, 
    {
      name: "Databinding Angular 7", 
      webUrl: "https://www.positronx.io/introduction-data-binding-angular-7/"
    }, 
    {
      name: "Regex for Accurate wordcount using JS", 
      webUrl: "https://stackoverflow.com/questions/4593565/regular-expression-for-accurate-word-count-using-javascript"
    }, 
    {
      name: "Supercharge Router Transition Features Using Animation", 
      webUrl: "https://medium.com/google-developer-experts/angular-supercharge-your-router-transitions-using-new-animation-features-v4-3-3eb341ede6c8"
    }
  ]; 




  constructor() { }

  ngOnInit() {
  }

}
