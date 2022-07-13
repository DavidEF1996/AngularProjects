import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    favoritos: this.fb.array(['Metal', 'Resident'], Validators.required),
  });

  validarCampos(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  get formulario() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  //ARRAYS
  //1. CREAR ARRAY
  //2. en el html especificar la propiedad formarrayname
  //3. recorrer los elementos del arreglo
  //4. en el control name pondremos el indice
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
