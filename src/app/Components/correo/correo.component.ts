import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;

  constructor() { 
    this.correo ={
      Titulo: "Titulo del mail",
      cuerpo: "Cuerpo del mail",
      emisor: "emisor",
      destinatario: "destinatario" 
    }
  }

  ngOnInit() {
  }

}
