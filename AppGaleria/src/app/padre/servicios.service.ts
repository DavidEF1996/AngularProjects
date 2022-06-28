import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor() { }


  private _arreglobusquedas:string[]=[]

  get arreglobusquedas(){
    return [...this._arreglobusquedas];
  }

  guardarDato(data:string){
    console.log("entro con " ,data)
    this._arreglobusquedas.unshift(data);
    console.log(this._arreglobusquedas);
  }
}
