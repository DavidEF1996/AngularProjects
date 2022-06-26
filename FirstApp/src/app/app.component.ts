import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'App Contador';
  public acumulado: number = 0;
  public base: number = 5;

  acumular(numero: number) {
    this.acumulado += numero;
  }
}
