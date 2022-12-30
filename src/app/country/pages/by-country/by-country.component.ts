import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html'
})
export class ByCountryComponent {

  public argument     : string = '';//variable asociada al valor del input de busqueda
  public errorConsult : boolean = false;//variable para controlar el estado de erro de consultas y mostrar el alert

  //inyectando o instanciando los servicios
  constructor(private countriesService:CountriesService) { }

  public search():void{
    this.errorConsult = false;
    // el metodo suscribe tiene varias funciones para procesar la informacion suscribe(
    //  (response)=>{} para la informacion regresada
    //  (error)=>{} para procesar los errores que puedan ocurrir
    //  (result)=>{} para procesar un resultado en caso de que todo halla ocurrido con exito
    //)
    this.countriesService.searchCountry(this.argument)
      .subscribe(
        (resp)=>{
          console.log(resp);
        },
        (error)=>{
          console.log(error);
          this.errorConsult = true;
        }
      );
  }
}
