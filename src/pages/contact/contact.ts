import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  ResArray = [
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CE', numero: 24324234, nombre: 'Homero Simpson', telefono : 3218818879, direccion: 'Carrera 13 calle 8'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CE', numero: 24324234, nombre: 'Homero Simpson', telefono : 3218818879, direccion: 'Carrera 13 calle 8'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CE', numero: 24324234, nombre: 'Homero Simpson', telefono : 3218818879, direccion: 'Carrera 13 calle 8'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'}
  ];

  private paso:number =1;
  private mensaje:string ="Siguiente";
  constructor(public navCtrl: NavController) {

  }

  private siguiente(){
    this.paso++;
    if(this.paso==3){
      this.mensaje="Enviar";
    }
    if(this.paso==4){
      this.paso=1;
    }
    
  }

}
