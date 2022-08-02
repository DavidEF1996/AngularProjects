import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Heroes } from '../interfaces/interfaces';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiciosHeroeService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = environment.desarrollo;

  getClientes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(`${this.baseUrl}/heroes`);
  }

  getInfoCliente(parametro: string): Observable<Heroes> {
    return this.http.get<Heroes>(`${this.baseUrl}/heroes/${parametro}`);
  }
}
