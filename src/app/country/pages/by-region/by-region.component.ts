import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html'
})
export class ByRegionComponent {

  public regions         : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']; // regiones disponible
  public activeRegion    : string = '';//variable para almacenar la regin seleccionada
  public errorConsult    : boolean = false;//variable para controlar el estado de erro de consultas y mostrar el alert
  public countryResponse : Country[] = []; // arreglo de paises para almacenar las respuestas

  //inyectando o instanciando los servicios
  constructor(private countriesService:CountriesService) { }

  public setClassElement(item:string):string{
    return item === this.activeRegion ? 'btn btn-warning text-white' : 'btn btn-outline-info';
  }

  public search(argument:string):void{
    // si la opcion seleccionada es igual a la activa y el arreglo de paises está lleno solo salimos
    if(this.activeRegion === argument && this.countryResponse.length !== 0) return;

    // restableciendo el arreglo de restpuesta a uno vacio
    this.countryResponse = [];

    this.activeRegion = argument; // asignamos el valor del argumento de la funcion al argumento de la clase
    this.errorConsult = false;
    // el metodo suscribe tiene varias funciones para procesar la informacion suscribe(
    //  (response)=>{} para la informacion regresada
    //  (error)=>{} para procesar los errores que puedan ocurrir
    //  (result)=>{} para procesar un resultado en caso de que todo halla ocurrido con exito
    //)
    this.countriesService.searchCountry({argument: argument, mode:{region:true}})
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


}
