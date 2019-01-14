import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { EntryAddComponent } from './entry-add/entry-add.component'; 
import { EntryEditComponent } from './entry-edit/entry-edit.component';
import { EntryGetComponent } from './entry-get/entry-get.component'; 
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';


// These states need to match the transitions defined in the routerTransition trigger
const routes: Routes = [
  {
    path: '', 
    component: HomeComponent, 
    data: { state: 'home' } 
  },
  {
    path: 'entry/create',
    component: EntryAddComponent, 
    data: { state: 'entryadd' } 
  },
  {
    path: 'entry/edit/:id',
    component: EntryEditComponent, 
    data: { state: 'entryedit' } 
  },
  {
    path: 'entry',
    component: EntryGetComponent,
    data: { state: 'entry' } 
  }, 
  {
    path: 'about',
    component: AboutComponent, 
    data: { state: 'about' } 
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
