import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryAddComponent } from './entry-add/entry-add.component';
import { EntryGetComponent } from './entry-get/entry-get.component';
import { EntryEditComponent } from './entry-edit/entry-edit.component';

// Loading Bar
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

// Reactive Forms 
import { ReactiveFormsModule } from '@angular/forms';

// For the missing ControlContainer
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EntryAddComponent,
    EntryGetComponent,
    EntryEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SlimLoadingBarModule, 
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
