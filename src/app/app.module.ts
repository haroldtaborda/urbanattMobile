import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InicioPage } from '../pages/inicio/inicio';
import { ClientesPage } from '../pages/clientes/clientes';
import { CreatePage } from '../pages/clientes/create/create';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from '@angular/common/http';

//Imports del componente de producto
import { ProductosPage } from '../pages/productos/productos';
import { CrearProductoPage } from '../pages/productos/crear/crearProducto';

@NgModule({
  declarations: [
    MyApp,
    ClientesPage,
    AboutPage,
    ContactPage,
    InicioPage,
    HomePage,
    CreatePage,
    TabsPage,
    ProductosPage,
    CrearProductoPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ClientesPage,
    AboutPage,
    ContactPage,
    InicioPage,
    HomePage,
    CreatePage,
    TabsPage,
    ProductosPage,
    CrearProductoPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
