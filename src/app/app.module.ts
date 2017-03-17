import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OtherPage } from '../pages/otherPage/otherPage';
import { PaginaUno } from '../pages/paginaUno/paginaUno';
import { PaginaDos } from '../pages/paginaDos/paginaDos';
import { PaginaTres } from '../pages/paginaTres/paginaTres';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OtherPage,
    PaginaUno,
    PaginaDos,
    PaginaTres
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OtherPage,
    PaginaUno,
    PaginaDos,
    PaginaTres
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
