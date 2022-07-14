import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {


  miFormulario = this.fb.group({

    genero:['M',Validators.required],
    notificacion:[true,Validators.required],
    terminosCondiciones:[true,Validators.requiredTrue]

  })

  persona={
    genero:'F',
    notificacion:false
  }




  constructor(private fb:FormBuilder) {

    this.miFormulario.valueChanges.subscribe(e=>{
      this.persona = e
    })
  }

  ngOnInit(): void {

   // this.miFormulario.reset(this.persona)

    //si es que quisieramos darle por defecto
    this.miFormulario.reset({
      ...this.persona, //extraemos todo de persona y
      terminosCondiciones:true // agregamos la propiedad con el valor deseado
    })


  }

}
