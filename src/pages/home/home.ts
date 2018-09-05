import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { ClientesPage } from '../clientes/clientes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public mostarLogin=false;
  constructor(public navCtrl: NavController) {
    this.mostarLogin=false;
  } 

   private iniciar(_credentials) {
      this.mostarLogin=true;
      
      }

      openPage(p) {
     
        if(p == 'clientes'){
          this.navCtrl.push(ClientesPage);
        }
        else  if(p == 'cerrarSesion'){
          this.mostarLogin=false;
        }
      }
     
     
private crear(_credentials) {
    console.log("crea usuario");
      
      }
      
      private recordar(_credentials) {
    console.log("Olvido contraseña");
      
      }

}
