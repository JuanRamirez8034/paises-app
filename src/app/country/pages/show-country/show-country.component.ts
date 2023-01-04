import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html'
})
export class ShowCountryComponent implements OnInit {

  public countryData !: Country; //variable para almacenar la info del pais solicitado, al principio puede ser null

  // inyectando el observable de las rutas proveniente de angular/routing
  // se encarga de analizar la rutas cada vez que se accede a él
  constructor(private activatedRoute: ActivatedRoute, private countriesService:CountriesService) { }

  // funcion que se encarga de susbcribirnos al metodo inyectado ActivatedRoute ya que se ejecuta solo una vez al acceder al programa
  ngOnInit(): void {

    // "params" permite extraer los parametros definidos en las rutas
    // los parametros encontrados deben estar definidos en el archivo de rutas de la aplicacion

    // this.activatedRoute.params
    //   .subscribe(({code})=>{

    //     console.log(code);

    //     // obteneiendo el valor desde el servicio
    //     this.countriesService.searchByCode(code)
    //       .subscribe((country:Country)=>{
    //         console.log(country);
            
    //     });

    //   });


    // forma corta de extraer la informacion utilizando un operador de rxjs
    this.activatedRoute.params
      .pipe(
        // modificando la subscripcion, recibe el valor del primer "subscribe()" y retorna otra funcion que 
        // contuene su propio "subscribe()" al cual se le pasa el parametro de la primera funcion
        // y ese subscribe final se puede trabjar despues con el subscribe principal

        // switchMap(({code})=>{return this.countriesService.searchByCode(code)})
        switchMap(({code}) => this.countriesService.searchCountry({argument:code, mode:{code:true},liteMode:false}))
      )
      .subscribe((country:Country[])=>{
        console.log(country[0]);
        this.countryData = country[0];//guardando el unico valor del resultado en la variable
      })

  }

}
