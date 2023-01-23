import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistRoutingModule } from './todolist-routing.module';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ToDoListComponent
  ],
  imports: [
    CommonModule,
    TodolistRoutingModule,
    FormsModule,

  ]
})
export class TodolistModule { }
