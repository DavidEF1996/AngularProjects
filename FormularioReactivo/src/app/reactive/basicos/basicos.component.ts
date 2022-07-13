import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]],
  });

  validarCampo(campo: string) {
    return (
      this.miFormulario.controls[campo].errors && // pregunto si tengo errores en el formulario
      this.miFormulario.controls[campo].touched
    );
  }

  guardar() {
    console.log('llego');
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched(); // hace que se marquen todos los elementos del form
      return;
    }
    this.miFormulario.reset();
  }
  //1. importar el formbuilder
  //2. crear el objeto
  //3. Asignar el formulario al form del html
  //4. empatar los atributos con el form control name ne el html
  //5. Se puede hacer validaciones con el Validators.....
  //6. Se puede mostrar los mensajes de error preguntando si el formulario tiene errores, si devuelve true se muestra sino se oculta

  /*** Submit*/
  //1. primero agregar el evento submit al formulario
  //2. crear el método guardar

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.miFormulario.reset({
      nombre: 'David',
      precio: 1000,
    });
  }
}
