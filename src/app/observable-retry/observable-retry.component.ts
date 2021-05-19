import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {retry} from 'rxjs/operators'

@Component({
  selector: 'app-observable-retry',
  templateUrl: './observable-retry.component.html',
  styleUrls: ['./observable-retry.component.css']
})
export class ObservableRetryComponent  {

  constructor() { 

    let i = 0;

// Vamos a crear un Observable manualmente
    const  obs$ = new Observable( observer =>{


     const intervalo = setInterval( () =>{
        
       i++;
       observer.next(i);

       if (i === 4){
        clearInterval(intervalo)
        observer.complete();
       }

       if (i===2){
         console.log("i = 2 ....error");
         observer.error ('i llego a 2');
       }
        
      
    }, 1000 );


  });


  obs$.pipe(
    retry(1)  // Lo intentaria unicamente una vez
  ).subscribe(
    valor => console.log("subs", valor),
    (err) => console.warn('Error:', err ),
    () =>  console.info('Obs terminado')
  );

 }

}
 