import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalComponent } from './country/pages/by-capital/by-capital.component';
import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { ShowCountryComponent } from './country/pages/show-country/show-country.component';

// objeto que permite definir las rutas, es un arreglo que contiene los paths y los elementos respectivos
const routes: Routes = [
  {
    path:'', // nombre de la ruta
    component: ByCountryComponent, //componente a mostrar
    pathMatch:'full' //indicar que es la ruta principal y/o ruta que se accede si solo se coloca el nombre del dominio
  },
  {
    path:'region',
    component:ByRegionComponent
  },
  {
    path:'capital',
    component:ByCapitalComponent
  },
  {
    path:'showCountry/:code',
    component:ShowCountryComponent
  },
  {
    path:'**',//el simbolo del asterisco doble "**" indica que es cualquier ruta no definida
    redirectTo:''//indica el nombre de la ruta a redirigir, tambien se puede coocar un componente de error personalizado
  }
]

@NgModule({
  imports:[
    // indica el modulo que permite trabjar las rutas, pueden ser rutas hijas o rutas raiz (rood, chid)
    RouterModule.forRoot(routes)
  ],
  exports:[
    //exportando las rutas
    RouterModule
  ]
})
export class AppRoutingModule{}