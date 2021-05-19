import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import {retry, take, map, filter} from 'rxjs/operators'

@Component({
  selector: 'app-observable-filter',
  templateUrl: './observable-filter.component.html',
  styleUrls: ['./observable-filter.component.css']
})
export class ObservableFilterComponent  {

  constructor() { 

    this.retornaIntervalo()
    .subscribe(console.log)   // esto es un metodo para trasladar el resultado a una función
                              // en este caso a console.log. Directamente seria:
                              //.subscribe (
                              // (valor) => console.log (valor));



  
   }
   retornaIntervalo(){
  
    const intervalo$ = interval(500)           // Recuerda que aqui se puede optimizar como return intervalo$ = interval(1000).... 
                        .pipe(                  // eliminando return intervalo$
                          map(valor => valor +1),
                          filter( valor => (valor % 2 === 0) ? true: false),
                          take(10),
                        );
  
    return intervalo$;
  }


}
