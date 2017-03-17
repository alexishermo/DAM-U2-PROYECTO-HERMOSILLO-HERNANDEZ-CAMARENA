import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
    templateUrl: "paginaTres.html"
})

export class PaginaTres{

    public datos: any={p1:"", p2:"", p3:""};
    constructor(public navCtrl: NavController, public params: NavParams,  private alertCtrl: AlertController){        
            
    }

    mensajeCorrecto() {
    
        let alert = this.alertCtrl.create({
        title: 'Correcto!!',
        subTitle: 'Eres un vato culto my friend',
        buttons: ['Ok']
        });

        alert.present();
    }//signoMexico

    mensajeIncorrecto() {
    
        let alert = this.alertCtrl.create({
        title: 'Incorrecto!!',
        subTitle: 'Revisa la ortografía (mayusculas y minusculas en nombres propios), así como campos vacíos.',
        buttons: ['Ok']
        });

        alert.present();
    }//signoMexico

    validarRespuestas(){
        if(this.datos.p1=="Sorjuana Ines" && this.datos.p2=="Manuel Lozada" && this.datos.p3=="Q. Roo."){
            this.mensajeCorrecto();
        }//if

        else{
            this.mensajeIncorrecto();
        }
    }

}