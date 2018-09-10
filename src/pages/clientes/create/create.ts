import { Component } from '@angular/core';
import { NavController, ViewController, NavParams,ToastController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {
 
  modoConsulta;
  cliente={};
  constructor(public navCtrl: NavController, private alertCtrl: AlertController,
    public viewCtrl: ViewController, public params: NavParams) {
    this.init()
  }

  init(){
    if (this.params.get('modoConsulta') != null && this.params.get('modoConsulta') ==true) {
      this.modoConsulta=true;
    }
    else{
      this.modoConsulta=false;
    }
  if (this.params.get('cliEdit') != null) {
    this.cliente = this.params.get('cliEdit');
  }
  else {
    this.cliente={};
  }
  }
 
  private acept(miFormulario) {
    debugger;
    this.mensajeConfirmacion('Exito', 'Registro procesado exitosamente ');
    this.viewCtrl.dismiss(this.cliente);
  }
  private cancel() {
    debugger;
    this.viewCtrl.dismiss(null);
  }
  dismiss(c) {
   
  }



  //MODALS
  private mensajeConfirmacion(titulo, mensaje) {
    debugger;
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensaje,
      buttons: ['Ok']
    });
    alert.present();
  }
}

