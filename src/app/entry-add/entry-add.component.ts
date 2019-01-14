import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms'; // For writing the forms 

// Add the created service into this 
import { EntryService } from '../entry.service'; 

@Component({
  selector: 'app-entry-add',
  templateUrl: './entry-add.component.html',
  styleUrls: ['./entry-add.component.css']
})
export class EntryAddComponent implements OnInit {

  private showConfirmation:boolean = false;

  angForm: FormGroup;
  // stored in angForm.value.entry_title, etc.
  constructor(private fb: FormBuilder, private es: EntryService) {
    this.createForm();
  }


  createForm() {
    this.angForm = this.fb.group({ // this.angular_form is an instance of this.formbuilder.{}...
      entry_title: ['', Validators.required ],
      entry_body: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

  // wrapper for service function 
  addEntry(entry_title, entry_body) {
    this.es.addEntry(entry_title, entry_body);
    // redirect to the entry url after adding the entry
    // this.router.navigateByUrl("entry"); 
    // dont do this; this makes the form cancel
    // instead, lets show a confirmation screen
    this.showConfirmation = true;
  }

  countWords(body:String) {
    return this.es.countWords(body);
  }

}
