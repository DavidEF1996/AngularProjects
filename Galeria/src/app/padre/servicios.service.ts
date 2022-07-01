import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, Welcome } from './interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  public resultados: Gif[] = [];
  constructor(private http: HttpClient) {}
  private url = 'https://api.giphy.com/v1/gifs';
  private apikey: string = 'aJG5m7JMCyZQPXDcaB57tWpeRZC008Br';

  private _arreglobusquedas: string[] = [];

  get arreglobusquedas() {
    return [...this._arreglobusquedas];
  }

  guardarDato(data: string) {
    if (!this._arreglobusquedas.includes(data) && data != '') {
      this._arreglobusquedas.unshift(data);
      this._arreglobusquedas = this.arreglobusquedas.splice(0, 10);
    }

    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', '10')
      .set('q', data);
    this.http
      .get<Welcome>(`${this.url}/search`, { params })
      .subscribe((res: any) => {
        this.resultados = res.data;
      });
  }
}
