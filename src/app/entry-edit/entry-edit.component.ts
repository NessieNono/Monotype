import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entry-edit',
  templateUrl: './entry-edit.component.html',
  styleUrls: ['./entry-edit.component.css']
})
export class EntryEditComponent implements OnInit {

	// Private Attributes
	entry: any = {};
	angForm: FormGroup;

	constructor(private route: ActivatedRoute,
				private router: Router,
				private es: EntryService,
				private fb: FormBuilder) {
					this.createForm();
				 }

	createForm() {
    this.angForm = this.fb.group({
        entry_title: ['', Validators.required ],
        entry_body: ['', Validators.required ],
      });
    }


	ngOnInit() {
		this.route.params.subscribe(params => {
			this.es.editEntry(params['id']).subscribe(res => {
				this.entry = res;
			});
		});
	}


	updateEntry(entry_title, entry_body) {
		this.route.params.subscribe(params => {
			this.es.updateEntry(entry_title, entry_body, params['id']);
			console.log("navigating to entry");
			this.router.navigate(['entry']);
		});
	};

	countWords(body:String) {
		return this.es.countWords(body);
	}


}
