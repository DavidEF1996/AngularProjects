import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroesRoutingModule } from './heroes-routing/heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { RutasHeroesPipe } from './pipes/rutas-heroes.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';




@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    RutasHeroesPipe,
    TarjetasComponent,

  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,

  ]
})
export class HeroesModule { }
