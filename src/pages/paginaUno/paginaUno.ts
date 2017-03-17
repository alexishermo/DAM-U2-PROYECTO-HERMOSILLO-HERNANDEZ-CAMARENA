import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
    templateUrl: "paginaUno.html"
})

export class PaginaUno{

    public datos: any={nacionalidad:""};

    constructor(public navCtrl: NavController, public params: NavParams, private alertCtrl: AlertController){        
            
    }

    signoMexico() {
    
        let alert = this.alertCtrl.create({
        title: 'Su signo chino',
        subTitle: 'Leon',
        buttons: ['Ok']
        });

        alert.present();
    }//signoMexico

    signoUSA() {
    
        let alert = this.alertCtrl.create({
        title: 'Su signo chino',
        subTitle: 'Puerco',
        buttons: ['Ok']
        });

        alert.present();
    }//signoUSA

    signoNinguno() {
    
        let alert = this.alertCtrl.create({
        title: 'ALERTA!!',
        subTitle: 'Seleccione una nacionalidad',
        buttons: ['Ok']
        });

        alert.present();
    }//signoUSA

    nacionalidadSeleccionada(){
        
        if(this.datos.nacionalidad=="Mexico"){
            this.signoMexico();
        }//if
        else if(this.datos.nacionalidad=="Gringo"){
            this.signoUSA();
        }
        else{
            this.signoNinguno();
        }
    }//nacionalidadSeleccionada
}//class