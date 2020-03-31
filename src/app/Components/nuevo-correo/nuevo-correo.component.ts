import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-nuevo-correo',
  templateUrl: './nuevo-correo.component.html',
  styleUrls: ['./nuevo-correo.component.scss']
})
export class NuevoCorreoComponent implements OnInit {

  nuevoCorreo: FormGroup;
  submitted = false;
  @Input() correo: any;
  @Output()  acccionRealizada: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.nuevoCorreo = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      cuerpo: ['', [Validators.required, Validators.minLength(10)]],
      destinatario: ['', [Validators.required, Validators.email]],
    });
    
    if(this.correo != undefined){
      console.log("A",this.correo);
      this.nuevoCorreo.patchValue({
        titulo: 'Re: '+ this.correo.titulo, 
        destinatario: this.correo.emisor
      });
    }
  }

  get formulario() { return this.nuevoCorreo.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.nuevoCorreo.invalid) {
      return;
    }

    let correo = this.nuevoCorreo.value;
    correo.leido = false;
    correo.emisor = 'correoEmisor1@openWebinar.inv';

    alert("Correo Enviado \nEliminamos el formulario");
    this.onReset();
  }

  onReset() {
    this.submitted = false;
    this.nuevoCorreo.reset();
    this.acccionRealizada.emit();
  }

}
