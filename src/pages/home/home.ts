import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { Observable } from 'rxjs/Observable';
import { ClientesPage } from '../clientes/clientes';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AlertController,ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario;
  contrasenia;
  data;
  url="http://192.168.0.25:8082/urbaNatt/rest";
  public mostarLogin=false;
  constructor(public navCtrl: NavController,public http: HttpClient,private alertCtrl: AlertController) {
    this.mostarLogin=false;
  } 

  private iniciar() { 
    this.validarLogin().subscribe(
      result => {
        debugger;
          if(result.loginResult && result.responseResult && 
            result.responseResult.result){
              this.mostarLogin=true;
          }else{
            this.modalInfo("Información", "Verifique usuario y contraseña");
            
          }

      },
      error => {
  
        this.modalInfo("Información", "Verifique usuario y contraseña");
          console.log(<any>error);
      }
  );
   
    
    }
   private validarLogin(): Observable<any> { 
 
      this.data ={};
      this.data.userName=this.usuario;
      this.data.password=this.contrasenia;
    let json = JSON.stringify(this.data);
 
    let headers = new HttpHeaders()
    .set('Accept','application/json, text/plain, */*')
    .set('Content-Type','application/json;charset=utf-8')
    .set("Access-Control-Allow-Origin", "*");

   return this.http.post(this.url+'/admin/login', this.data, {headers: headers});
   }

   private modalInfo(titulo, mensaje){
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensaje,
      buttons: ['Ok']
    });
    alert.present();
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
