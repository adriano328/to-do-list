import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'todolist', pathMatch: 'full'
  },
  {
    path: 'todo',
    loadChildren: ()=> import('./modules/todolist/todolist.module').then(m => m.TodolistModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
