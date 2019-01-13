import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components 
import { EntryAddComponent } from './entry-add/entry-add.component';
import { EntryGetComponent } from './entry-get/entry-get.component';
import { EntryEditComponent } from './entry-edit/entry-edit.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Loading Bar
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

// Reactive Forms 
import { ReactiveFormsModule } from '@angular/forms';

// For the missing ControlContainer
import { FormsModule } from '@angular/forms';

// HttpClient 
import { HttpClientModule } from '@angular/common/http';

// The created Service 
import { EntryService } from './entry.service';

// For animations 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    EntryAddComponent,
    EntryGetComponent,
    EntryEditComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SlimLoadingBarModule, 
    ReactiveFormsModule, 
    FormsModule, 
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
