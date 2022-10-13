

import { combineLatest, filter, from, interval, map, of, reduce, Subject, take, tap, timer } from "rxjs";

/**
 * Ejercicio: 1 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */
/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */

      const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];
      const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
      const data$ = from(nombres).pipe(map(data=>capitalizar(data))).subscribe({next:(value)=>console.log(value)});

      /**
 * Ejercicio: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

       (() =>{
        const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];
      
        from(datos).pipe(
                filter<any>(num => !isNaN(num)? num:0 ),
                reduce((acc, curr)=>acc+curr,0)    
        ).subscribe( console.log ) // La salida debe de ser 32
      })();


/**
 * Ejercicio: Realizar que los dos observables finales, 
 * emitan exactamente el mismo valor
 * 
 * Tip: Hot Observable? subjects?
 */

 (() =>{

        // == NO TOCAR este bloque ====================
        const reloj$ = interval(1000).pipe(
          take(5),
          map( val => Math.round(Math.random() * 100) )
        );
        // No tocar la creación del observable
        // ============================================
      
        const subject$ = new   Subject()
        
      reloj$.subscribe(subject$);
        // Estos dos observables deben de emitir exactamente los mismos valores
        subject$.subscribe( val => console.log('obs1', val) );
        subject$.subscribe( val => console.log('obs2', val) );
      })();     
      

      /**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() =>{

        let inicio = 7;
        const countdown$ = interval(700).pipe(
         
            map(data=> {
               
                return inicio;
            }),
            tap(data=>{
                inicio=inicio-1;
            }),
            tap(e => console.log("antes del tap :",e)),
            take(inicio+1),
           
        );
        
    
        // No tocar esta línea ==================
        countdown$.subscribe( console.log ); // =
        // ======================================
    
    
    })();
    
            
    /**
 * Ejercicio: Combinar ambos observables (letras$, numeros$)
 * para que las emisiones sean la concatenación de los últimos
 * valores emitidos
 */

//  Ejemplo de la tada esperada:
// a1
// a2
// b2
// b3
// c3
// c4
// d4
// d5
// e5

(() =>{

    const letras  = ['a','b','c','d','e'];
    const numeros = [1,2,3,4,5];

    // Emite letras cada segundo
    const letras$  = interval(1000).pipe(
        map( i => letras[i] ),
        take( letras.length )
    );
    
    // Emite numeros del 1 al 5 cada segundo, pero tiene un delay inicial
    // de 500 milésimas 
    const numeros$ = timer(500,1000).pipe(
        map( i => numeros[i] ),
        take( numeros.length )
    );

    const concatenado$ = combineLatest(letras$,numeros$).pipe(map(([a,b])=> a+b)).subscribe(console.log)

})();