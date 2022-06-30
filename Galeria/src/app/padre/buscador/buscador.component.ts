import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent  {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;




  constructor(private servicios:ServiciosService){

  }
  extraer(){
    const valor = this.txtBuscar.nativeElement.value;
    console.log(valor);
    this.servicios.guardarDato(valor);
    this.txtBuscar.nativeElement.value='';
  }

}
