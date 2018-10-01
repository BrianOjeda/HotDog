import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuscarAmigoPage } from '../buscar-amigo/buscar-amigo';
import { MisMensajesPage } from '../mis-mensajes/mis-mensajes';
import { EstamosPerdidosPage } from '../estamos-perdidos/estamos-perdidos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root: any = BuscarAmigoPage;
  tab2Root: any = MisMensajesPage;
  tab3Root: any = EstamosPerdidosPage;
  constructor(public navCtrl: NavController) {
  }
  
}
