import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms'; // For writing the forms 

@Component({
  selector: 'app-entry-add',
  templateUrl: './entry-add.component.html',
  styleUrls: ['./entry-add.component.css']
})
export class EntryAddComponent implements OnInit {


  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
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

}
