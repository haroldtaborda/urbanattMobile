import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CreatePage } from '../clientes/create/create';
import { AlertController,ModalController } from 'ionic-angular';

@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html'
})
export class ClientesPage {

  ResArray = [
    {tipo : 'CC', numero: 12321212, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CE', numero: 24324234, nombre: 'Homero Simpson', telefono : 3218818879, direccion: 'Carrera 13 calle 8'},
    {tipo : 'CC', numero: 246, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 236, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 234546, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'NIT', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 45645, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 24, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CE', numero: 2432244234, nombre: 'Homero Simpson', telefono : 3218818879, direccion: 'Carrera 13 calle 8'},
    {tipo : 'CC', numero: 634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 234, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'NIT', numero: 234, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 10924937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CE', numero: 24324234, nombre: 'Homero Simpson', telefono : 3218818879, direccion: 'Carrera 13 calle 8'},
    {tipo : 'CC', numero: 246, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 34, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'},
    {tipo : 'CC', numero: 1094937634, nombre: 'Harold Steven Taborda Gutierrez', telefono : 3218818879, direccion: 'Mirador de'}
  ];

  listaClientes=[];
  tipoId;
  numId;
  constructor(public navCtrl: NavController,private alertCtrl:
     AlertController,public modalCtrl: ModalController) {
  }

  search(){
    this.listaClientes=[];
    if(this.tipoId && this.numId){
      this.ResArray.forEach(element => {
        if(element.tipo == this.tipoId && element.numero==this.numId){
          this.listaClientes.push(element);
        }
      });
    } else  if(this.numId){
      this.ResArray.forEach(element => {
        if(element.numero==this.numId){
          this.listaClientes.push(element);
        }
      });
    }
    else  if(this.tipoId){
      this.ResArray.forEach(element => {
        if(element.tipo == this.tipoId){
          this.listaClientes.push(element);
        }
      });
    }
    else{
      this.listaClientes=this.ResArray;
    }
  }
  
  private eliminarCliente(res){
    const index: number = this.listaClientes.indexOf(res);
    if (index !== -1) {
        this.listaClientes.splice(index, 1);
        this.mensajeConfirmacion('Exito', 'Registro eliminado exitosamente');
        this.search();
    }   
  }

private create(){

let profileModal = this.modalCtrl.create(CreatePage);
   profileModal.onDidDismiss(data => {
     if(data){
     this.listaClientes.push(data);
     this.search();
     }
   });
   profileModal.present();
  }
  private edit(clienteEdita){
    let profileModal = this.modalCtrl.create(CreatePage, { cliEdit: clienteEdita });
   profileModal.onDidDismiss(data => {
    if(data){
    const index: number = this.ResArray.indexOf(clienteEdita);
     //primero elimino el anterior
     if (index !== -1) {
      this.listaClientes.splice(index, 1);   
      }   
      //agrego el editado
      this.listaClientes.push(data);
      this.search();
    }
   });
   profileModal.present();
  }
  private details(clienteMuestra){
    let profileModal = this.modalCtrl.create(CreatePage, { cliEdit: clienteMuestra, modoConsulta: true});
    profileModal.present();
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

