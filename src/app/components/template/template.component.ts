import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border : 1px solid red;
    }

  ` ]
  
})
export class TemplateComponent  {

  usuario:Object = {
    nombre : null,
    apellido : null,
    email :null,
    pais : "",
    sexo : "Hombre",
    acepta : false
  }

  paises = [{
    codigo : "PER",
    nombre : "Peru",
  },
  {
    codigo : "ESP",
    nombre : "España"
  }]

  sexos :string[] = ["Hombre", "Mujer", "Marciano"];

  constructor() { }

  guardar(forma :NgForm)  {
    console.log("ngForm", forma);
    console.log("value", forma.value)
    console.log("Usuario :",  this.usuario);
  }
}
