import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorreoComponent } from './Components/correo/correo.component';
import { ListaCorreosComponent } from './Components/lista-correos/lista-correos.component';

@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    ListaCorreosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
