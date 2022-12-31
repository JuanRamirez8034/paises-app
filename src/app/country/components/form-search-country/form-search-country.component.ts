import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-search-country',
  templateUrl: './form-search-country.component.html'
})
export class FormSearchCountryComponent {

  public argument : string = '';//variable que contiene el valor del input

  // creando el emisor de evento para pasar el evento a otro componente padre
  // 1 se inporta el "@Output()" desde angular/core
  // 2 se crea el evento con el cual se le asigna una variable de referencia
  // Se instancia y crea el EventEmiter desde angular/core
  // se especifica el tipo de argumeno que recibe el emiter ya qye es de tipo generico <type>
  @Output('onSearch') onSearch : EventEmitter<string> = new EventEmitter();

  //funcion para accionar la busqueda
  public search():void{
    
    this.onSearch.emit(this.argument);//emitimos el evento al enviar el formulario y le pasamos el argumento
    
  }


}
