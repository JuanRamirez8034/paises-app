import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interfaces';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private API_URL     : string = 'https://restcountries.com/v3.1'; // url de la api de paises


  constructor(private Http: HttpClient) { }

  public searchCountry(argument:string):Observable<Country[]>{
    
    const url = `${this.API_URL}/name/${argument}`;

    return this.Http.get<Country[]>(url);
  }

}
