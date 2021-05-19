import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import {retry, take, map, filter} from 'rxjs/operators'

@Component({
  selector: 'app-observable-unsubscribe',
  templateUrl: './observable-unsubscribe.component.html',
  styleUrls: ['./observable-unsubscribe.component.css']
})
export class ObservableUnsubscribeComponent implements OnDestroy  {


  intervaloSubs: Subscription

  constructor() { 

    this.intervaloSubs =   this.retornaIntervalo().subscribe(console.log);

   }


ngOnDestroy():void {
  this.intervaloSubs.unsubscribe();
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
