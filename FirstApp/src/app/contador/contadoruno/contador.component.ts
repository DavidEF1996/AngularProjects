import { Component } from '@angular/core';

@Component({
  selector: 'contador-component',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      La base para el contador es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="acumular(base * -1)">Restar: {{ base * -1 }}</button>

    <span>{{ acumulado }}</span>

    <button (click)="acumular(base)">Sumar: {{ base }}</button>
  `,
})
export class ContadorComponent {
  public title: string = 'App Contador';
  public acumulado: number = 0;
  public base: number = 5;

  acumular(numero: number) {
    this.acumulado += numero;
  }
}
