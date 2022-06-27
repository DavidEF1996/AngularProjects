import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DBZServices } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent {
  // @Input() personajes: Personaje[] = [];

  get personajes() {
    return this.dbzServices.personajes;
  }
  constructor(private dbzServices: DBZServices) {}
}
