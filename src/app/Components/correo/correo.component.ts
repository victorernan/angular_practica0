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
      cuerpo: "Esta obra maestra de la crónica negra en la América profunda, ganadora de 2 Oscars®, es un espléndido thriller que consagró a los hermanos Coen como los mejores cineastas americanos contemporáneos. Un hombre apocado y tímido (William H. Macy), casado con la hija de un millonario que le impide disfrutar de su fortuna, decide contratar a dos delincuentes (Steve Buscemi y Peter Stormare) para que secuestren a su mujer con el fin de montar un negocio propio con el dinero del rescate. Pero, por una serie de azarosas circunstancias, al secuestro se suman tres brutales asesinatos, lo que obliga a una oficial de policía embarazada con mucho sentido común (Frances McDormand) a intervenir.",
      emisor: "victor hernan",
      destinatario: "nerea san juan" 
    }
  }

  ngOnInit() {
  }

}
