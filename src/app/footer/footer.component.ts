import { Component, OnInit } from '@angular/core';

// attain links from service
import { LinksService } from '../links.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private ls:LinksService) { }

  ngOnInit() {
  }


  private links = this.ls.getLinks();
  private resources = this.ls.getResources();


  getYear() { 
  	return new Date().getFullYear();
  }

}
