import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {retry} from 'rxjs/operators'

@Component({
  selector: 'app-funcion-observable',
  templateUrl: './funcion-observable.component.html',
  styleUrls: ['./funcion-observable.component.css']
})
export class FuncionObservableComponent  {

  constructor() { 

    


  this.retornaObservable().pipe(
    retry(1)  // Lo intentaria unicamente una vez
  ).subscribe(
    valor => console.log("subs", valor),
    (err) => console.warn('Error:', err ),
    () =>  console.info('Obs terminado')
  );

 }

retornaObservable (): Observable<number>{
  let i = 0;

// Vamos a crear un Observable manualmente
    const  obs$ = new Observable<number>( observer =>{


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

  return obs$;
}

// Recordar que tambien se puede de esta forma:
//return new Observable<number>( observer =>{......
// eleminando return obs$


}
