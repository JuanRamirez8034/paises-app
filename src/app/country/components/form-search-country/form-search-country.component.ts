import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-form-search-country',
  templateUrl: './form-search-country.component.html'
})
export class FormSearchCountryComponent implements OnInit{

  public argument : string = '';//variable que contiene el valor del input

  // creando el emisor de evento para pasar el evento a otro componente padre
  // 1 se inporta el "@Output()" desde angular/core
  // 2 se crea el evento con el cual se le asigna una variable de referencia
  // Se instancia y crea el EventEmiter desde angular/core
  // se especifica el tipo de argumeno que recibe el emiter ya qye es de tipo generico <type>
  @Output('onSearch')   onSearch   : EventEmitter<string> = new EventEmitter();//emisor de evento para la busqueda al enviar el formulario

  @Output('onDebounce') onDebounce : EventEmitter<string> = new EventEmitter();//emisor de evento para cuando se deja de escribir

  public debounce : Subject<string> = new Subject();//observable personalizdo para cuando se deje de escribir

  // metodo implementado desde angular/core
  // se ejecuta solo una vez al iniciar el programa
  // se instancia en la declaracion de las clases
  ngOnInit(): void {
    this.debounce
      //pipe es el modificador de respuesta
    .pipe(debounceTime(500))// debounce time es el operador que permite juto a "pipe()" accionar la funcion de suscribe luego del tiempo especificado
    .subscribe((value)=>{//evento que se ejecuta al llamar al metodo "next"
      // evento que se ejecutará cada vez que pase el tiempo estimado
      this.onDebounce.emit(value);
    });
  }

  //funcion para accionar la busqueda
  public search():void{
    
    this.onSearch.emit(this.argument);//emitimos el evento al enviar el formulario y le pasamos el argumento
    
  }

  // funcion que se encargará de pasar los valores al observable debounce
  // como se está llamando desde el evento (input)="debounceSearch($event)" le pasamos el evento que emite el input
  public debounceSearch(event:any):void{
    // con el metodo "next" del observable debounce pasamos el argumento que recibirá la funcion que se ejecuta cuando está subscrito
    this.debounce.next(this.argument); 
  }


}
