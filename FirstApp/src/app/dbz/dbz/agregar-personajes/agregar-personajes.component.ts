import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DBZServices } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personajes',
  templateUrl: './agregar-personajes.component.html',
  styleUrls: ['./agregar-personajes.component.css'],
})
export class AgregarPersonajesComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzServices.addPersonaje(this.nuevo);
    console.log(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
  constructor(private dbzServices: DBZServices) {}
}
