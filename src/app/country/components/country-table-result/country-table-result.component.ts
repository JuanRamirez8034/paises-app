import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-country-table-result',
  templateUrl: './country-table-result.component.html'
})
export class CountryTableResultComponent {

  @Input('countryResponseArray') countryResponse : Country[] = []; // input para pasar el arreglo de paises como un atributo

  

}
