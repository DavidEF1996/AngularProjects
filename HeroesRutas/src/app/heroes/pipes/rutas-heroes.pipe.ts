import { Pipe, PipeTransform } from '@angular/core';

import { Heroes } from '../interfaces/interfaces';


@Pipe({
  name: 'rutasHeroes'
})
export class RutasHeroesPipe implements PipeTransform {

  transform(objeto: Heroes): string {


    return this.mostrarRuta(objeto);
  }


  mostrarRuta(objeto: Heroes) {

    if (objeto) {
      return "assets/heroes/" + objeto.id + ".jpg"
    } else {
      return "assets/no-image.png"
    }
  }



}
