import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ServiciosService } from './servicios.service';



@NgModule({
  declarations: [
    SidebarComponent,
    BuscadorComponent,
    GaleriaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    BuscadorComponent,
    GaleriaComponent
  ],
  providers:[
    ServiciosService
  ]
})
export class PadreModule { }
