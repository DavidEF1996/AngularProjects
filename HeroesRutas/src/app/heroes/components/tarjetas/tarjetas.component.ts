import { Component, OnInit } from '@angular/core';
import { Heroes } from '../../interfaces/interfaces';
import { ServiciosHeroeService } from '../../services/servicios-heroe.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  constructor(private servicios: ServiciosHeroeService) { }


  heroe: Heroes[] = [];


  cargarHeroesInterfaz() {
    return this.servicios.getClientes().subscribe(res => {
      this.heroe = res
    });
  }

  ngOnInit(): void {
    this.cargarHeroesInterfaz();
  }
}
