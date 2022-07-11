import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './app/pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './app/pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './app/pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './app/pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full', //esto hace que esta ruta sea por defecto
  },
  {
    path: 'region',
    component: PorRegionComponent,
  },

  {
    path: 'capital',
    component: PorCapitalComponent,
  },

  {
    path: 'pais/:id',
    component: VerPaisComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //este hace la configuracion propia de las rutas, como rutas principales y luego pasamos las rutas creadas
  exports: [RouterModule], //y luego lo exportamos
})
export class AppRoutingModule {}
