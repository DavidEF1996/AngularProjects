import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-heroes',
  templateUrl: './listado-heroes.component.html',
  styleUrls: ['./listado-heroes.component.css'],
})
export class ListadoHeroesComponent {
  heroes: string[] = ['Hulk', 'Batman', 'Superman', 'Darth Vader'];
  heroeBorrado: any = '';

  eliminarHeroe() {
    console.log('eliminando...');
    //this.heroes = this.heroes.filter((her) => her != 'Hulk');
    const heroeborrado = this.heroes.shift();
    this.heroeBorrado = heroeborrado;
  }
}
