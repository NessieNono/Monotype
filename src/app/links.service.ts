import { Injectable } from '@angular/core';
// Additional resources 
import { Resource } from './models/Resource';

@Injectable({
  providedIn: 'root'
})
export class LinksService { 


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

  getLinks() {
  	return this.links;
  }

  constructor() { }
}
