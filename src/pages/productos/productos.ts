import { Component } from '@angular/core';
import { AlertController,ModalController } from 'ionic-angular';
import { CrearProductoPage } from './crear/crearProducto';

@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html'
})
export class ProductosPage {

    private productosPrueba = [
        {id : 1, nombre: 'Proteina Carnica', medida: 'Lb', peso : 2.2, cantidad : 15 ,tipo: 'Proteinas',descripcion: 'descripcion de Proteina Carnica'},
        {id : 2, nombre: 'Fortamax', medida: 'Ml', peso : 500, cantidad : 17, tipo: 'Bebidas', descripcion:'Descripcion de Fortamax'},
        {id : 3, nombre: 'Mega Mass', medida: 'Lb', peso : 2.2, cantidad : 25, tipo: 'Proteinas', descripcion:'Descripcion de Mega Mass'},
        {id : 4, nombre: 'Colageno Hidrolizado', medida: 'G', peso : 700, cantidad : 18, tipo: 'Multivitaminicos', descripcion:'Descripcion de Colageno Hidrolizado'},
        {id : 5, nombre: 'Q´DOR', medida: 'Lb', peso : 2.2, cantidad : 21,  tipo: 'Proteinas', descripcion:'Descripcion de Q´DOR'},
        {id : 6, nombre: 'Urbadren', medida: 'Ml', peso : 500, cantidad : 50, tipo: 'Bebidas', descripcion:'Descripcion de Urbadren'}
      ];

  private listaProductos=[];
  private nombreBusqueda;
  private tipoBusqueda;
  constructor(private modalControler:ModalController, private alertControler:AlertController) {
  }

  //Metodo que busca los datos para llenar la lista dependiendo de que campos esten llenos en la pantalla
  private buscar(){
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

  //metodo que elimina el producto que le ingresa como parametro
  private eliminarProducto(producto){
    const index: number = this.listaProductos.indexOf(producto);
    if (index !== -1) {
        this.listaProductos.splice(index, 1);
        this.mensajeConfirmacion('Exito', 'Registro eliminado exitosamente');
        this.buscar();
    }   
  }

  //Metodo encaragado de mostrar mensajes de confirmacion despues de generar alguna accion
  private mensajeConfirmacion(titulo, mensaje){
    let alert = this.alertControler.create({
      title: titulo,
      subTitle: mensaje,
      buttons: ['Ok']
    });
    alert.present();
  }

  //metodo que realiza el llamado a la clase crear producto y despues inserta un producto a la lista con la informacion que obtiene
  private crearProducto(){
    let profileModal = this.modalControler.create(CrearProductoPage);
       profileModal.onDidDismiss(data => {
         if(data){
         this.listaProductos.push(data);
         this.buscar();
         }
       });
       profileModal.present();
      }

      private detallesProducto(productoSeleccionado){
        let profileModal = this.modalControler.create(CrearProductoPage, { proEdit: productoSeleccionado, modoConsulta: true});
        profileModal.present();
      }
}
