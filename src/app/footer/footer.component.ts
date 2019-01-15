import { Component, OnInit } from '@angular/core';

// attain links from service
import { LinksService } from '../links.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private es:LinksService) { }

  ngOnInit() {
  }


  private links = this.es.getLinks();


  getYear() { 
  	return new Date().getFullYear();
  }

}
