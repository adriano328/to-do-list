import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  check: boolean = false;
  public atividade: string = '';
  public listaAtividade: Array<{atividade: string, check: boolean}> = JSON.parse(localStorage.getItem("list") || '[]');
  constructor() {}

  ngOnInit(): void {
  }

  setAtividade(event:any) {
    this.listaAtividade.unshift({atividade: this.atividade, check: false})
    this.atividade = '';
    this.listaAtividade.sort((first, last) => Number(first.check) - Number(last.check));
    localStorage.setItem('list', JSON.stringify(this.listaAtividade));
  }

  deleteItem(event: number) {
    this.listaAtividade.splice(event, 1);
  }

  deleteAll() {
    this.listaAtividade = [];
    localStorage.setItem('list', JSON.stringify(this.listaAtividade));
  }

  mudarPosicao(from: number, to: number) {
    this.listaAtividade.splice(to, 0, this.listaAtividade.splice(from, 1)[0]);
  }
}
