import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas-funciones',
  templateUrl: './promesas-funciones.component.html',
  styleUrls: ['./promesas-funciones.component.css']
})
export class PromesasFuncionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then (usuarios => {
      console.log(usuarios);
      
    })
  }


  getUsuarios(){

    const promesa = new Promise ( resolve =>{

      fetch ('https://reqres.in/api/users?page=2')
      .then ( res =>  res.json())
      .then (body => resolve (body.data)); 
      
    })

        return promesa;

  }

  /*   Esto es lo mismo que lo anterior

getUsuarios(){

    return new Promise ( resolve =>{

      fetch ('https://reqres.in/api/users?page=2')
      .then ( res =>  res.json())
      .then (body => resolve (body.data)); 
      
    })
  }
      */
  
}
