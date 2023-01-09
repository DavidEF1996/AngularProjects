import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Heroes } from '../interfaces/interfaces';
import { delay, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiciosHeroeService {
  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.desarrollo;

  // getClientes(): Observable<Heroes[]> {
  //   return this.http.get<Heroes[]>(`${this.baseUrl}/heroes`);
  // }

  getClientes(): Observable<Heroes[]> {
    return of(this.dataClientes);
  }

  getInfoCliente(parametro: string): Observable<Heroes> {
    return this.http.get<Heroes>(`${this.baseUrl}/heroes/${parametro}`);
  }

  getQueryHero(parametro: string): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${this.baseUrl}/heroes?q=${parametro}&_limit=3`);
  }


  insertData(heroe: Heroes): Observable<Heroes> {
    return this.http.post<Heroes>(`${this.baseUrl}/heroes/`, heroe);
  }

  actualizaData(heroe: Heroes): Observable<Heroes> {
    return this.http.put<Heroes>(`${this.baseUrl}/heroes/${heroe.id}`, heroe);
  }

  eliminarData(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`);
  }




  private dataClientes: Heroes[] =

    [
      {
        id: "Aguacate",
        superhero: "Aguacate",
        publisher: "DC Comics",
        alter_ego: "Bruce Wayne",
        first_appearance: "2.50",
        characters: "Bruce Wayne",
        cantidad: 0,
        actualizar: true
      },
      {
        id: "Brocolo",
        superhero: "Brocoli",
        publisher: "DC Comics",
        alter_ego: "Kal-El",
        first_appearance: "1.00",
        characters: "Kal-El",
        cantidad: 0,
        actualizar: true
      },
      {
        id: "Frutillas",
        superhero: "Frutillas",
        publisher: "DC Comics",
        alter_ego: "Jay Garrick",
        first_appearance: "4.00",
        characters: "Jay Garrick, Barry Allen, Wally West, Bart Allen",
        cantidad: 0,
        actualizar: true
      },
      {
        id: "Remolacha",
        superhero: "Remolacha",
        publisher: "DC Comics",
        alter_ego: "Alan Scott",
        first_appearance: "2.00",
        characters: "Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz",
        cantidad: 0,
        actualizar: true
      },
      {
        id: "Tomate",
        superhero: "Tomate",
        publisher: "DC Comics",
        alter_ego: "Oliver Queen",
        first_appearance: "0.50",
        characters: "Oliver Queen",
        cantidad: 0,
        actualizar: true
      },
      {
        id: "Uvillas",
        superhero: "Uvillas",
        publisher: "DC Comics",
        alter_ego: "Princess Diana",
        first_appearance: "0.25",
        characters: "Princess Diana",
        cantidad: 0,
        actualizar: true
      }

    ]


}
