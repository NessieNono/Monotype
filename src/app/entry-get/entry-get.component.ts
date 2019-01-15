import { Component, OnInit } from '@angular/core';

// get the Model
import Entry from '../Entry';
import { EntryService } from '../entry.service';

// Animating entry items
import { trigger, state, style, animate, transition, query, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-entry-get',
  templateUrl: './entry-get.component.html',
  styleUrls: ['./entry-get.component.css'], 
  animations: [
    trigger('entryCascade', [
        transition('*=>*', [
            query(':enter', style({ opacity: 0 }), {optional: true}),
            query(':enter', stagger('300ms', [
              animate('0.5s ease-in', keyframes([
                style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
                style({opacity: .8, transform: 'translateY(35px)',  offset: 0.3}),
                style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
              ]))]), {optional: true})

          ])
      ])
  ]
})
export class EntryGetComponent implements OnInit {

	// private attributes
	entries: Entry[];

  constructor(private es: EntryService) { }

  ngOnInit() {
	this.es.getEntries().subscribe((data: Entry[]) => {
		this.entries = data;
	});
  }

  // Wrapping the delete function
  deleteEntry(id) {
    this.es.deleteEntry(id).subscribe(res => {
        console.log(res); 
        console.log("ths is delete entry function in service"); 
        // remove that deleted entry from the DOM manually to reflect changes 
        const table = document.getElementById("tablebody");
        let deletedEntry = document.getElementById(id);
        console.log("this is the entry we are going to remove from the dom: ", deletedEntry);
        table.removeChild(deletedEntry);
        

      })
  }



}
