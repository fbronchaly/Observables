import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

            constructor() { }

            ngOnInit(): void {


              // Promesa básica (las que se empleaban inicialmente)

                  const promesa = new Promise ((resolve, reject)=>{

                    if (false){
                                  resolve ('Hola mundo');
                    } else {
                                  reject ('Algo salido mal')
                              }

                    });

                  promesa.then((mensaje)=> {

                    console.log (mensaje)

                  })
                  .catch( error => console.log('Error en mi promesa', error));



            }

}