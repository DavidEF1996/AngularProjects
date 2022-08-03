import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../../servicios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private servicio: ServiciosService) { }

  ngOnInit(): void {
  }


  login() {
    this.servicio.getClientes().subscribe(e => {
      if (e.id) {
        this.router.navigate(['./heroes/listado']);
      }
    })
  }

}
