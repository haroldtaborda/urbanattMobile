import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CreatePage } from '../clientes/create/create';
import { AlertController,ModalController } from 'ionic-angular';

@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html'
})
export class ProductosPage {

    private productosPrueba = [
        {id : 1, nombre: 'Proteina Carnica', medida: 'lb', cantidad : 2.2, tipo: 'Proteinas'},
        {id : 2, nombre: 'Fortamax', medida: 'ml', cantidad : 500, tipo: 'Bebidas'},
        {id : 3, nombre: 'Mega Mass', medida: 'lb', cantidad : 2.2, tipo: 'Proteinas'},
        {id : 4, nombre: 'Colageno Hidrolizado', medida: 'g', cantidad : 700, tipo: 'Multivitaminicos'},
        {id : 5, nombre: 'Q´DOR', medida: 'lb', cantidad : 2.2, tipo: 'Proteinas'},
        {id : 6, nombre: 'Urbadren', medida: 'ml', cantidad : 500, tipo: 'Bebidas'}
      ];

  private listaProductos=[];
  private nombreBusqueda;
  private tipoBusqueda;
  constructor() {
  }

  //Metodo que busca los datos para llenar la lista dependiendo de que campos esten llenos en la pantalla
  buscar(){
    this.listaProductos=[];
    if(this.tipoBusqueda && this.nombreBusqueda){
      this.productosPrueba.forEach(element => {
        if(element.tipo == this.tipoBusqueda && element.nombre==this.nombreBusqueda){
          this.listaProductos.push(element);
        }
      });
    } else  if(this.nombreBusqueda){
      this.productosPrueba.forEach(element => {
        if(element.nombre==this.nombreBusqueda){
          this.listaProductos.push(element);
        }
      });
    }
    else  if(this.tipoBusqueda){
      this.productosPrueba.forEach(element => {
        if(element.tipo == this.tipoBusqueda){
          this.listaProductos.push(element);
        }
      });
    }
    else{
      this.listaProductos=this.productosPrueba;
    }
  }
}
