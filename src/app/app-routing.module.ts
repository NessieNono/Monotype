import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { EntryAddComponent } from './entry-add/entry-add.component'; 
import { EntryEditComponent } from './entry-edit/entry-edit.component';
import { EntryGetComponent } from './entry-get/entry-get.component'; 
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },
  {
    path: 'entry/create',
    component: EntryAddComponent
  },
  {
    path: 'entry/edit/:id',
    component: EntryEditComponent
  },
  {
    path: 'entry',
    component: EntryGetComponent
  }, 
  {
    path: 'about',
    component: AboutComponent
  }, 
  {
    path: '**', 
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
