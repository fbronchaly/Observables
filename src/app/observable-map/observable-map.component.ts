import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import {retry, take, map} from 'rxjs/operators'

@Component({
  selector: 'app-observable-map',
  templateUrl: './observable-map.component.html',
  styleUrls: ['./observable-map.component.css']
})
export class ObservableMapComponent {

  constructor() { 

    this.retornaIntervalo()
    .subscribe(console.log)   // esto es un metodo para trasladar el resultado a una función
                              // en este caso a console.log. Directamente seria:
                              //.subscribe (
                              // (valor) => console.log (valor));



  
   }
   retornaIntervalo(){
  
    const intervalo$ = interval(1000)           // Recuerda que aqui se puede optimizar como return intervalo$ = interval(1000).... 
                        .pipe(                  // eliminando return intervalo$
                          take(4),
                          map(valor =>{
                            return ('Hola mundo' + valor)
                          })
                        );
  
    return intervalo$;
  }




}
