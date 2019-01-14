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

  getPreview(entry:Entry) {
    let preview:string;

  }


}
