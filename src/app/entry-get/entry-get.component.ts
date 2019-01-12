import { Component, OnInit } from '@angular/core';

// get the Model
import Entry from '../Entry';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entry-get',
  templateUrl: './entry-get.component.html',
  styleUrls: ['./entry-get.component.css']
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
    this.es.deleteEntry(id);
  }

}
