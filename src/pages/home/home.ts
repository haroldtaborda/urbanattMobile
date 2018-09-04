import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  constructor(public navCtrl: NavController) {
  } 

   private iniciar(_credentials) {
      console.log("Inicia sesion");
      this.navCtrl.push(InicioPage);
      }
     
     
private crear(_credentials) {
    console.log("crea usuario");
      
      }
      
      private recordar(_credentials) {
    console.log("Olvido contraseña");
      
      }

}
