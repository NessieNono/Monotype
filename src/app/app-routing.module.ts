import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { EntryAddComponent } from './entry-add/entry-add.component'; 
import { EntryEditComponent } from './entry-edit/entry-edit.component';
import { EntryGetComponent } from './entry-get/entry-get.component'; 


const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
