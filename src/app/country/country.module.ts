import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ShowCountryComponent } from './pages/show-country/show-country.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    ShowCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,//modulo ara trabajar con formularios
    HttpClientModule, //modulo propio de angular para realizar las peticones http
    RouterModule, //modulo para las rutas
  ],
  exports: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    ShowCountryComponent
  ]
})
export class CountryModule { }
