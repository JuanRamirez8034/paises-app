import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html'
})
export class ShowCountryComponent implements OnInit {

  // inyectando el observable de las rutas proveniente de angular/routing
  // se encarga de analizar la rutas cada vez que se accede a él
  constructor(private activatedRoute: ActivatedRoute, private countriesService:CountriesService) { }

  // funcion que se encarga de susbcribirnos al metodo inyectado ActivatedRoute ya que se ejecuta solo una vez al acceder al programa
  ngOnInit(): void {

    // "params" permite extraer los parametros definidos en las rutas
    // los parametros encontrados deben estar definidos en el archivo de rutas de la aplicacion
    this.activatedRoute.params
      .subscribe(({code})=>{

        console.log(code);

        // obteneiendo el valor desde el servicio
        this.countriesService.searchByCode(code)
          .subscribe((country:Country)=>{
            console.log(country);
            
        });

      });

  }

}
