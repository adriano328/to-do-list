import { Component, DoCheck, OnInit } from '@angular/core';

//interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');
  constructor() { }

  ngDoCheck(): void {
    this.setLocalStorate()
  }


  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Você realmente deseja Deletar tudo?")

    if(confirm){
      this.taskList = [];
    }
    
  }

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false})
  }

  public validationInput(event: string, index: number){
   
    if(!event.length){
      const confirm = window.confirm("Task esta vazia, deseja Deletar?");

      if(confirm){
        this.deleteAllTaskList();
      }
    }
  }

  public setLocalStorate(){
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

}
