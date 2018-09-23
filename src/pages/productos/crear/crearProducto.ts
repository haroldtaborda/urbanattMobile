import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-createProducto',
  templateUrl: 'crearProducto.html'
})
export class CrearProductoPage {
 
  modoConsulta;
  producto={};
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
  if (this.params.get('proEdit') != null) {
    this.producto = this.params.get('proEdit');
  }
  else {
    this.producto={};
  }
  }
 
  private acept(miFormulario) {
    this.mensajeConfirmacion('Exito', 'Registro procesado exitosamente ');
    this.viewCtrl.dismiss(this.producto);
  }
  private cancel() {
    this.viewCtrl.dismiss(null);
  }
  dismiss(c) {
   
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

