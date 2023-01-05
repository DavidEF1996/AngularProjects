import { Component, OnInit } from '@angular/core';
import { Factura } from '../../interfaces/interfaces';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  datos?:Factura;
  constructor() { }


  
  ngOnInit(): void {
    this.cargarDatosMemoria();
  }


  cargarDatosMemoria (){

  this.datos= JSON.parse(localStorage.getItem('datosFactura')!) as Factura;

    
  }


  limpiarLocalStorage(){
  
    localStorage.clear();
    document.location.href = "/heroes/listado";
  }
}
