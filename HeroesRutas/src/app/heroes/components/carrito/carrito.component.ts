import { Component, OnInit } from '@angular/core';
import { Heroes, Factura } from '../../interfaces/interfaces';
import { JsonPipe } from '@angular/common';

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


  eliminar(producto:Heroes){
    console.log("hago click");
    //console.log(this.data)
   this.data=this.data.filter(data=>data.id!=producto.id); 
    
  }

   
  objetoFactura: Factura= {
    nombreUsuario:"Pablo Fernando",
    fecha:"",
    subtotal:0,
    total:0,
    iva:0
  } 


  calcularIva(subtotal:number):number{
    return (12*subtotal)/100;
  }

  facturar(){

    let subtotal = 0;
    this.data.forEach(producto => {
      subtotal=subtotal+ Number(producto.first_appearance ) * producto.cantidad!;
    });

    this.objetoFactura.fecha = Date.now().toString();
    this.objetoFactura.subtotal=subtotal;
    this.objetoFactura.iva=this.calcularIva(subtotal);
    this.objetoFactura.total= this.calcularIva(subtotal)+subtotal;
 
    
  }

  

  salvarFactura():any{
    this.facturar();
    localStorage.setItem('datosFactura', JSON.stringify(this.objetoFactura));
    document.location.href = "/heroes/factura";
  }

}
