import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PromesasComponent } from './promesas/promesas.component';
import { PromesasFuncionesComponent } from './promesas-funciones/promesas-funciones.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ObservableRetryComponent } from './observable-retry/observable-retry.component';
import { FuncionObservableComponent } from './funcion-observable/funcion-observable.component';
import { ObservableMapComponent } from './observable-map/observable-map.component';
import { ObservableFilterComponent } from './observable-filter/observable-filter.component';
import { ObservableUnsubscribeComponent } from './observable-unsubscribe/observable-unsubscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    PromesasComponent,
    PromesasFuncionesComponent,
    RxjsComponent,
    ObservableRetryComponent,
    FuncionObservableComponent,
    ObservableMapComponent,
    ObservableFilterComponent,
    ObservableUnsubscribeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
