import { Component, OnInit } from '@angular/core';
import { Heroes, Tienda } from '../../interfaces/interfaces';
import { ServiciosHeroeService } from '../../services/servicios-heroe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EmergenteComponent } from '../../components/emergente/emergente.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {


  objeto: Heroes = {
    id: "",
    superhero: "",
    publisher: Tienda.DCComics,
    alter_ego: "",
    first_appearance: "",
    characters: "",
    alt_img: "",
  };


  listaCreadores = [
    {
      id: 'Dc',
      desc: 'DC - COMICS'
    },
    {
      id: 'Mv',
      desc: 'MARVEL -COMICS'
    }
  ]
  constructor(private servicio: ServiciosHeroeService,
    private activateRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {

    if (!this.router.url.includes('editar')) {
      return;
    }
    this.activateRoute.params.pipe(switchMap(({ id }) => this.servicio.getInfoCliente(id))).subscribe(heroe => this.objeto = heroe);

  }

  imprimir() {
    //console.log(this.objeto);

    if (!this.objeto.id) {
      console.log("agrega")
      this.servicio.insertData(this.objeto).subscribe(e => {
        console.log("Agregando: " + this.objeto);
        this.router.navigate(['/heroes/listado'])
        this._snackBar.open("Actualizado Correctamente", "", {
          duration: 2500
        })
      })
    } else {
      console.log("actualiza")
      this.servicio.actualizaData(this.objeto).subscribe(e => {
        console.log("Actualizando:" + this.objeto);
        this._snackBar.open("Actualizado Correctamente", "", {
          duration: 2500
        });
        this.router.navigate(['/heroes/', this.objeto.id])
      })

    }



  }


  eliminar(id: string) {

    const respuesta = this.dialog.open(EmergenteComponent, {
      data: this.objeto
    });

    respuesta.afterClosed().subscribe((res => {

      if (res) {
        this.servicio.eliminarData(id).subscribe(e => {
          console.log("Eliminado " + this.objeto)
          this.router.navigate(['/heroes/listado'])
        })
      }

    }))

  }


}
