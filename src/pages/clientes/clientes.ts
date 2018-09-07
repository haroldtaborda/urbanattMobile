import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
  }

  
  private eliminarCliente(res){
    const index: number = this.ResArray.indexOf(res);
    if (index !== -1) {
        this.ResArray.splice(index, 1);
        this.mensajeConfirmacion('Exito', 'Registro eliminado exitosamente ');
    }   
  }

private create(){
console.log('crea');
  }
  private edit(){
    console.log('edita');
  }
  private details(){
    console.log('muestra');
  }

  //MODALS
  private mensajeConfirmacion(titulo, mensaje){
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensaje,
      buttons: ['Ok']
    });
    alert.present();
  }
  
  private modalConfirm(res){
    let alert = this.alertCtrl.create({
      title: 'Confirmación',
      message: 'Al realizar esta acción se perderan los datos eliminados',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.eliminarCliente(res);
          }
        }
      ]
    });
    alert.present();
  }





}

