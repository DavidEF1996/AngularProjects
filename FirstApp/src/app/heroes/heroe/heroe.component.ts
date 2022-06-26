import { Component } from '@angular/core';

@Component({
  selector: 'heroe-component',
  templateUrl: 'heroe.component.html',
  //template: `<h1>hola</h1>`,
})
export class HeroeComponent {
  public nombre: string = 'Ironman';
  public edad: number = 45;

  get nombreCapitalizado(): string {
    return `${this.nombre.toUpperCase()}`;
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'spiderman';
  }

  cambiarEdad(): void {
    this.edad = 25;
  }
}
