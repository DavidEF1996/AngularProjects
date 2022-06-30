import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  public resultados: any[] = [];
  constructor(private http: HttpClient) {}

  private apikey: string = 'aJG5m7JMCyZQPXDcaB57tWpeRZC008Br';

  private _arreglobusquedas: string[] = [];

  get arreglobusquedas() {
    return [...this._arreglobusquedas];
  }

  guardarDato(data: string) {
    console.log('entro con ', data);

    if (!this._arreglobusquedas.includes(data) && data != '') {
      this._arreglobusquedas.unshift(data);
      this._arreglobusquedas = this.arreglobusquedas.splice(0, 10);
      this.http
        .get(
          `https://api.giphy.com/v1/gifs/search?api_key=aJG5m7JMCyZQPXDcaB57tWpeRZC008Br&q=${data}`
        )
        .subscribe((res: any) => {
          this.resultados = res.data;
        });
    }
  }
}
