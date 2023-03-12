import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {


  contador:number = 0;
  base:number= 5;


  aumentar(tipoOperacion:String, base:number){
    (tipoOperacion=='suma')? this.contador+=base:this.contador-=base;
   
  }
  constructor() { }

  ngOnInit(): void {
  }

}
