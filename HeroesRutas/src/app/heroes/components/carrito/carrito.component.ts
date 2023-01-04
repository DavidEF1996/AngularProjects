import { Component, OnInit } from '@angular/core';
import { Heroes } from '../../interfaces/interfaces';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor() { }

  data:Heroes[] =[]

  ngOnInit(): void {

    this.cargarDatosMemoria();
  }

  cargarDatosMemoria (){

    this.data = JSON.parse(localStorage.getItem('productosGuardados')!) as Heroes[];

    console.log(this.data);
  }

}
