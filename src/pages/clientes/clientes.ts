import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html'
})
export class ClientesPage {

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

  constructor(public navCtrl: NavController) {
  }

  cancelar () {
    this.navCtrl.pop();
    this.navCtrl.push(InicioPage);
   
  }
}

