import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoHeroesComponent } from './listado-heroes/listado-heroes.component';

@NgModule({
  declarations: [HeroeComponent, ListadoHeroesComponent],
  exports: [ListadoHeroesComponent, HeroeComponent],
  imports: [CommonModule],
})
export class HeroesModulo {}
