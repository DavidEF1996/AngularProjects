import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatOptionSelectionChange } from '@angular/material/core';
import { Heroes } from '../../interfaces/interfaces';
import { ServiciosHeroeService } from '../../services/servicios-heroe.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string = "";
  heroes: Heroes[] = [];
  heroeSeleccionado: Heroes | undefined;
  mostrar: boolean = false;
  heroeSeleccionado2: Heroes | undefined;
  cambiar: boolean = false;
  constructor(private servicio: ServiciosHeroeService) { }

  ngOnInit(): void {


  }

  buscar() {

    this.servicio.getQueryHero(this.termino).subscribe(e => {
      this.heroes = e;
      if (this.heroes.length > 0) {
        this.mostrar = true;
      } else {
        this.mostrar = false;
      }
    })


  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    this.cambiar = false;
    if (this.heroes.length <= 0) {
      this.heroeSeleccionado = undefined;
      return;
    }
    const heroe: Heroes = event.option.value;
    this.termino = heroe.superhero;

    this.servicio.getInfoCliente(heroe.id).subscribe(e => {
      this.heroeSeleccionado = e;
      this.cambiar = true;

      this.termino = ""
    })


  }

  cambiando(event: MatOptionSelectionChange) {
    if (event.isUserInput) {
      console.log('llego')
      this.heroeSeleccionado2 = event.source.value;

    }

  }
}
