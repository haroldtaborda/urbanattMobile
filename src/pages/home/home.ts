import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { InicioPage } from '../inicio/inicio';
import { ActivatedRoute } from '@angular/router'; 
import { Router  } from '@angular/router';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  constructor(public navCtrl: NavController) {
  
  }
  
  private iniciar(_credentials) {
      console.log("Inicia sesion");
      }
     
     
private crear(_credentials) {
    console.log("crea usuario");
      
      }
      
      private recordar(_credentials) {
    console.log("Olvido contraseña");
      
      }

}
