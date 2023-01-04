import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country, SearchCountryArguments } from '../interfaces/country.interfaces';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private API_URL     : string = 'https://restcountries.com/v3.1'; // url de la api de paises


  constructor(private Http: HttpClient) { }

  // funcion que dispara las busquedas, recibe un objeto de tipo 'SearchCountryArguments' definido en las interfaces
  // el objeto recibe dos parametros "argumeto de busqueda" y "modo de busqueda", el modo de busqueda es de tipo booleano y se coloca en "true" la busqueda a hacer
  public searchCountry({argument, mode={country:true, capital:false, region:false, code: false}, liteMode=true}:SearchCountryArguments):Observable<Country[]>{
    
    const argumentMode = mode.country ? 'name' : mode.capital ? 'capital' : mode.region ? 'region' : mode.code ? 'alpha' : 'name'; //asignando el valor correspondiente a l busqueda
    console.log('Se busca por: "'+argumentMode+'"');

    // creando los parametros de para la busqueda en modo lite
    let paramsFilter :HttpParams = new HttpParams();
    
    if(liteMode){// si la opcion lite está habilitada se agregan los parametros
      paramsFilter = new HttpParams().set('fields','name,flags,population,cca2');
      console.log('Busqueda en modo lite');
    }
    
    const url = `${this.API_URL}/${argumentMode}/${argument}`;

    return this.Http.get<Country[]>(url, {params:paramsFilter});
  }
}
