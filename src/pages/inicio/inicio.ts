import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home'
import { ClientesPage } from '../clientes/clientes';
import { ContactPage } from '../contact/contact';
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {



  constructor(public navCtrl: NavController,public menuCtrl: MenuController) {
  }

  private openMenu() {
    console.log('open menu');
    this.menuCtrl.open();
  }

   openPage(p) {
     
    if(p == 'clientes'){
      this.navCtrl.pop();
      this.navCtrl.push(ClientesPage);
    }
    else  if(p == 'cerrarSesion'){
      this.navCtrl.pop();
      this.navCtrl.push(HomePage);
    }
  }

}

