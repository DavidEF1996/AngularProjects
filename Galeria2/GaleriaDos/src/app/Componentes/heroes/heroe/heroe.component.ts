import { Component } from "@angular/core";



@Component({
        selector:'heroe-component',
        templateUrl: 'heroe.component.html'
    })
export class HeroeComponent {

     titulo:String = 'Hola';


     get tituloCambiado() : String  {
        return this.titulo.toUpperCase();
     }


     cambiarNombre ():void{
        this.titulo='Mundo';
     }

}