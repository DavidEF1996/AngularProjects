import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from '../pages/listado/listado.component';
import { AgregarComponent } from '../pages/agregar/agregar.component';


import { BuscarComponent } from '../pages/buscar/buscar.component';
import { HeroeComponent } from '../pages/heroe/heroe.component';
import { HomeComponent } from '../pages/home/home.component';
import { TarjetasComponent } from '../components/tarjetas/tarjetas.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // especifica que el home tendrà  la navegación hijas
    children: [
      {
        path: 'listado',
        component: TarjetasComponent
      },
      {
        path: 'agregar',
        component: AgregarComponent
      },
      {
        path: 'editar/:id',
        component: AgregarComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: ':id',
        component: HeroeComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
