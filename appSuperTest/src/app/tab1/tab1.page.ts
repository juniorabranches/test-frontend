import { Component } from '@angular/core';
import {ApiService} from '../api.service'
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  pedido: any = [{
    id: "",
    color: "",
    name: "",
    year: ""
  }]
  allPedidos: any;


  constructor( public loading: LoadingController, public api: ApiService){
    this.getPedidos();
  }

  async getPedidos(){
    this.pedido = []
    let load = await this.loading.create({
      message: 'Carregando Pedidos'
    });
    await load.present();
    this.api.getPedidos().then(pedidos => {
      this.allPedidos = pedidos;
      for (const key of Object.keys(this.allPedidos.data)) {

        this.pedido.push({
          id: this.allPedidos.data[key].id,
          color: this.allPedidos.data[key].color,
          name: this.allPedidos.data[key].name,
          year: this.allPedidos.data[key].year,
        })
      }; 
      console.log(this.pedido)
      load.dismiss()
    }).catch((error) => {
      console.log(error)
      load.dismiss()

    }); 
  }

 
}
