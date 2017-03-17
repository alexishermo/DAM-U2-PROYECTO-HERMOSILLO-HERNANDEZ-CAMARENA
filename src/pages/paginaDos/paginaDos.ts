import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
    templateUrl: "paginaDos.html"
})

export class PaginaDos{

    constructor(public navCtrl: NavController, public params: NavParams,  private alertCtrl: AlertController){        
            
    }

    alertaUno(){
        let alert = this.alertCtrl.create({
        title: 'Eres:',
        subTitle: 'Una gasela campeon',
        buttons: ['Ok']
        });

        alert.present();
    }

    alertaDos(){
        let alert = this.alertCtrl.create({
        title: 'Eres:',
        subTitle: 'Una Ada Madrina compa',
        buttons: ['Ok']
        });

        alert.present();
    }

    alertaTres(){
        let alert = this.alertCtrl.create({
        title: 'Eres:',
        subTitle: 'Un hermoso Unicornio',
        buttons: ['Ok']
        });

        alert.present();
    }
   
    mesEnero(){
        this.alertaUno();
    }

    mesMayo(){
        this.alertaDos();
    }

    mesSeptiembre(){
        this.alertaTres();
    }

}