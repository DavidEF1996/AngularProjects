import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DBZServices {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 150000,
    },
    {
      nombre: 'Vegeta',
      poder: 12000,
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }
  constructor() {
    console.log('Iniciando servicios...');
  }

  addPersonaje(argumento: Personaje) {
    this._personajes.push(argumento);
  }
}
