import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {

  }

  private siguiente(){
    this.paso++;
    if(this.paso==3){
      this.mensaje="Enviar";
    }
    if(this.paso==4){
      this.paso=1;
      this.mensaje="Siguiente";
      this.presentToast();
    }
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'El mensaje ha sido enviado, nuestro equipo de desarrollo se pondra en contacto',
      duration: 3000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
