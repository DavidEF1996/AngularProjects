import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './dbz/main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './dbz/personajes/personajes.component';
import { AgregarPersonajesComponent } from './dbz/agregar-personajes/agregar-personajes.component';
import { DBZServices } from './dbz/services/dbz.service';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarPersonajesComponent,
  ],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
  providers: [DBZServices],
})
export class DbzModule {}
