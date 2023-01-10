import { Component } from '@angular/core';
interface ContactForm {
  "nombre": string;
  "dni": number;
  "estado_civil": string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sesion14';

  model = {
    nombre: "",
    dni: "",
    estado_civil: "seleccione",
  }

  valores = '';
  
  onSubmit(values: any):void {
    console.log('Form Values: ', values);
    this.valores = values;
  }
}