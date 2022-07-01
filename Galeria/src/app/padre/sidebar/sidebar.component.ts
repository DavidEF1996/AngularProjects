import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  get historial() {
    return this.servicios.arreglobusquedas;
  }

  constructor(private servicios: ServiciosService) {}

  llamar(valor: string) {
    console.log(valor);
    this.servicios.guardarDato(valor);
  }
}
