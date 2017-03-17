import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaginaUno } from '../paginaUno/paginaUno';
import { PaginaDos } from '../paginaDos/paginaDos';
import { PaginaTres } from '../paginaTres/paginaTres';

@Component({
    templateUrl: "otherPage.html"
})

export class OtherPage{

    public paginaUno: any= PaginaUno;
    public paginaDos: any= PaginaDos;
    public paginaTres: any= PaginaTres;

    constructor(public navCtrl: NavController, public params: NavParams){        
            
    }

    irPaginaUno(){
        this.navCtrl.push(PaginaUno);
    }

    irPaginaDos(){
        this.navCtrl.push(PaginaDos);
    }

    irPaginaTres(){
        this.navCtrl.push(PaginaTres);
    }

    goBack(){
        this.navCtrl.pop();
    }

}