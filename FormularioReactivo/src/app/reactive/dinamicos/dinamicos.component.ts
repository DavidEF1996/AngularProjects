import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    favoritos: this.fb.array([]),
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


  agregar(){

   if(this.nuevoFavorito.invalid){return;}
    this.formulario.push(this.fb.control(this.nuevoFavorito.value,Validators.required));
    this.nuevoFavorito.reset();

  }

  eliminar(indice:number){
  this.formulario.removeAt(indice);
  }

  nuevoFavorito: FormControl=this.fb.control('');
  //ARRAYS
  //1. CREAR ARRAY
  //2. en el html especificar la propiedad formarrayname
  //3. recorrer los elementos del arreglo
  //4. en el control name pondremos el indice
  //5. para agregar mas a la lista, creamos un objeto independiente
  //6. agregar el elemento al html pero como un elemento independiente,  [formcontrol]
  //7. agregar al array
  //8. elimianr del array
  //9. el eliminar se puede usar el metodo que lista y removerle de allí

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
