import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-ciclo',
  templateUrl: './grid-ciclo.component.html',
  styleUrls: [
    './grid-ciclo.component.css',
    '../ciclo.component.css'
]
})
export class GridCicloComponent {

  @Input() salvandos: any[];

  constructor () {}

}
