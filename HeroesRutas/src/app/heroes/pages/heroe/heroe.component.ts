import { Component, Input, OnInit } from '@angular/core';
import { ServiciosHeroeService } from '../../services/servicios-heroe.service';
import { Heroes } from '../../interfaces/interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  constructor(
    private servicio: ServiciosHeroeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  @Input('heroe') heroe?: Heroes;
  recibir!: Heroes;

  ngOnInit(): void {

    if (this.heroe) {
      this.servicio.getInfoCliente(this.heroe.id).subscribe((res) => {
        this.recibir = res;
      });
    } else {
      this.route.params.subscribe((e) => {
        const { id } = e;
        this.servicio.getInfoCliente(id).subscribe((res) => {
          this.recibir = res;
        });
      });
    }

  }

  regresar() {
    this.router.navigate(['/heroes/listado']);
  }
}
