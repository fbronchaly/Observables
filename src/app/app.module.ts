import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PromesasComponent } from './promesas/promesas.component';
import { PromesasFuncionesComponent } from './promesas-funciones/promesas-funciones.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    PromesasComponent,
    PromesasFuncionesComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
