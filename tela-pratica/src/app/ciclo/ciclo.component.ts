import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector:'app-ciclo',
  templateUrl:'./ciclo.component.html',
  styleUrls: [
    './ciclo.component.css',
    '../app.component.css'
  ]
})


export class cicloComponent {

  @Output() aoSalvar = new EventEmitter<any>();

  nome: string = '';
  status: string = '';



  salvar(){

    const informacaoCiclo = {nome: this.nome, status: this.status };
    this.aoSalvar.emit(informacaoCiclo);

    this.limparCampos();
  }

  limparCampos(){
    this.nome = ''
  }
}






