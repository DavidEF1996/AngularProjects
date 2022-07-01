import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent implements OnInit {
  get resultados() {
    return this.servicios.resultados;
  }
  constructor(private servicios: ServiciosService) {}

  ngOnInit(): void {}
}
