
/**Observables */
/*import { fromEvent, interval, map, Observable, sample } from "rxjs"; //para crear observables





const click$ = fromEvent<PointerEvent >(document,'click').pipe(
        
        map(({x,y})=>({x,y}))
       );

const intervalo$ = interval(1000).pipe( sample(click$));
click$.subscribe(console.log);

intervalo$.subscribe(console.log);*/

import { fromEvent } from "rxjs/internal/observable/fromEvent";

import { debounceTime } from "rxjs/internal/operators/debounceTime";
import { map } from "rxjs/internal/operators/map";
import { pluck } from "rxjs/operators";
import { ajax } from 'rxjs/ajax';  
import { mergeAll } from "rxjs/internal/operators/mergeAll";
import { GithubUsersResponse, GithubUser } from './interfaces';
import { Observable } from "rxjs";

const body = document.querySelector('body');
const  input = document.createElement('input');
const lista= document.createElement('ol');
body.append(input);
body.append(lista);


//observables
const input$ = fromEvent<KeyboardEvent>(input, 'keyup');


const limpiar=()=>{
        while (lista.firstChild)
        lista.removeChild(lista.firstChild);
    }
      

const mostrarUsuarios=(usuarios:GithubUser[])=>{
        limpiar();
       usuarios.forEach(item =>{
        
                const elemento = document.createElement('li');
                const imagen = document.createElement('img');
                const enlace = document.createElement('a');

                imagen.src=item.avatar_url;
                enlace.href=item.html_url;
                enlace.text="visita su página";
                enlace.target='_blank';

                elemento.append(imagen);
                elemento.append(enlace);
                elemento.append(item.login)
                lista.append(elemento);
        }

        )
}
//subscripcion
input$.pipe(

        debounceTime<KeyboardEvent>(500),
        pluck('target','value'),
        map<any,Observable<GithubUsersResponse>>(
             texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
        ),
        mergeAll<Observable<GithubUsersResponse>>(),
        pluck<GithubUsersResponse, 'items'>('items'),
       

).subscribe(mostrarUsuarios);


