import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tela-pratica';
  salvandos: any[] = [];


  salvar($event){
    console.log($event)
    this.salvandos.push($event) ;
  }

}
