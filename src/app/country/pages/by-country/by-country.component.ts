import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [`
    li{
      cursor:pointer;
    }
    li:active{
      backgorund:#fafefd
    }
  `]
})
export class ByCountryComponent {

  public argument        : string = '';//variable asociada al valor del input de busqueda
  public errorConsult    : boolean = false;//variable para controlar el estado de erro de consultas y mostrar el alert
  public countryResponse : Country[] = []; // arreglo de paises para almacenar las respuestas
  public countrySugge    : Country[] = []; //arreglo para almacenar el arreglo de sugerencias

  //inyectando o instanciando los servicios
  constructor(private countriesService:CountriesService) { }

  public search(argument:string):void{
    this.argument = argument; // asignamos el valor del argumento de la funcion al argumento de la clase
    this.countrySugge = []; // restablecemos el arreglo de sugerencias a vacio
    this.errorConsult = false;
    // el metodo suscribe tiene varias funciones para procesar la informacion suscribe(
    //  (response)=>{} para la informacion regresada
    //  (error)=>{} para procesar los errores que puedan ocurrir
    //  (result)=>{} para procesar un resultado en caso de que todo halla ocurrido con exito
    //)
    this.countriesService.searchCountry({argument: argument, mode:{country:true}})
      .subscribe(
        (resp)=>{
          this.countryResponse = resp;//agregando la respuesta al arreglo correspondiente
          console.log(this.countryResponse);
          
        },
        (error)=>{
          console.log(error);
          this.countryResponse = [];
          this.errorConsult = true;
        }
      );
  }

  public sugge(event:string):void{
    // si esta vacio el string salir
    if(event.trim() === '') return;
    this.argument = event;
    this.countriesService.searchCountry({argument:event, mode:{country:true},liteMode:true})
      .subscribe(
        (resp)=>{
          console.log(resp.slice(0, 3));
          this.countrySugge = resp.slice(0, 3);
        },
        (error)=>{
          console.log(error);
          this.countrySugge = [];
        }
      )
  }
}
