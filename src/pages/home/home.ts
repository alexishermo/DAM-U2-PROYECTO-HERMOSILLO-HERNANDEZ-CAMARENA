import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { OtherPage } from '../otherPage/otherPage';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public otherPage: any= OtherPage;
  public validacion: any={username:"",password:""};
  
  
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    
  }
  
  presentAlert() {
    
    let alert = this.alertCtrl.create({
      title: 'WARNING!!',
      subTitle: 'Check your username and password',
      buttons: ['Ok']
    });

    alert.present();
  }//presentAlert

  presentAlertBienvenido() {
    
    let alert = this.alertCtrl.create({
      title: 'Welcome',
      subTitle: '',
      buttons: ['Ok']
    });

    alert.present();
  }//presentAlert

  validarLogin(){
    
    if(this.validacion.username=="admin" && this.validacion.password=="admin")
    {
        this.presentAlertBienvenido();
        this.validacion.username="";
        this.validacion.password="";
        this.navCtrl.push(OtherPage);
        console.log("ACCESO");
        
    }//if

    else
    {
      this.presentAlert();
      this.validacion.username="";
      this.validacion.password="";
      console.log("NO ACCESO");
    }//else

}//validarLogin

}//class
