import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {

  modoConsulta=false;
  cliente = {};
  constructor(public navCtrl: NavController, private alertCtrl: AlertController,
    public viewCtrl: ViewController, params: NavParams) {
      if (params.get('modoConsulta') != null && params.get('modoConsulta') ==true) {
        this.modoConsulta=true;
      }
      else{
        this.modoConsulta=false;
      }
    if (params.get('cliEdit') != null) {
      this.cliente = params.get('cliEdit');
    }
    else {
      this.cliente = {};
    }
  }


  private acept() {
    this.mensajeConfirmacion('Exito', 'Registro procesado exitosamente ');
    this.dismiss(this.cliente);
  }
  private cancel() {
    this.dismiss(null);
  }
  dismiss(c) {
    this.viewCtrl.dismiss(c);
  }



  //MODALS
  private mensajeConfirmacion(titulo, mensaje) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensaje,
      buttons: ['Ok']
    });
    alert.present();
  }
}

