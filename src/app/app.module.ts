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

// HttpClient 
import { HttpClientModule } from '@angular/common/http';

// The created Service 
import { EntryService } from './entry.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';


// For the timer
import { NgCircleProgressModule } from 'ng-circle-progress';

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
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#fdc400",
      "radius": "114",
      "space": "30",
      "toFixed": "0",
      "maxPercent": "100",
      "unitsFontSize": "26",
      "unitsColor": "#483500",
      "outerStrokeWidth": "10",
      "outerStrokeColor": "#FFFFFF",
      "innerStrokeColor": "#FFFFFF",
      "titleColor": "#483500",
      "titleFontSize": "54",
      "subtitleColor": "#483500",
      "animationDuration": "7400",
      "showTitle": false,
      "showSubtitle": false,
      "showUnits": false,
      "showInnerStroke": false
    })
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
