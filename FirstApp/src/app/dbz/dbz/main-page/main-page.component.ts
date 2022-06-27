import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DBZServices } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'Krilin',
    poder: 1456,
  };

  /* get personajes(): Personaje[] {
    return this.dbzServices.personajes;
  }*/

  constructor() {}

  //constructor(private dbzServices: DBZServices) {}
}
