import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators,FormArray } from "@angular/forms";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma:FormGroup;
  patternEmail:string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

  usuario:object = {
    nombrecompleto : {
      nombre : "Richard",
      apellido : "Gomez"
    },
    email : "richard@gmail.com"
  }

  constructor() { 
    this.forma = new FormGroup({
      'nombrecompleto' : new FormGroup({
        'nombre' : new FormControl('', 
        [ Validators.required, 
          Validators.minLength(3)]),
        'apellido' : new FormControl('',  Validators.required)
      }),
      'email' : new FormControl('', 
      [ Validators.required, 
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
        ,
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ])
    });
    // console.log(this.usuario);
    // this.forma.setValue(this.usuario);
  }

  guardarCambios(){
    console.log(this.forma.value);
    console.log(this.forma);
    // this.forma.reset(
    //   this.usuario
    // );
    // this.forma.reset( {
    //     nombrecompleto : {
    //       nombre : '',
    //       apellido : ''
    //     },
    //     email : '' } );

    // this.forma.controls['email'].setValue('nuevocorreo@gmail.com');
  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

}
