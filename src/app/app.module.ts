import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { MyApp } from './app.component';
import { BuscarAmigoPage } from '../pages/buscar-amigo/buscar-amigo';
import { MisMensajesPage } from '../pages/mis-mensajes/mis-mensajes';
import { EstamosPerdidosPage } from '../pages/estamos-perdidos/estamos-perdidos';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiciosAuthProvider } from '../providers/servicios-auth/servicios-auth';

// Initialize Firebase
let configFirebase = {
  apiKey: 'AIzaSyCNVj8cJFXmpJLKOfBPEiqpIByur7xZtJk',
  authDomain: 'hotdog-a97d6.firebaseapp.com',
  databaseURL: 'https://hotdog-a97d6.firebaseio.com',
  projectId: 'hotdog-a97d6',
  storageBucket: 'hotdog-a97d6.appspot.com',
  messagingSenderId: '788657835511'
};


@NgModule({
  declarations: [
    MyApp,
    BuscarAmigoPage,
    MisMensajesPage,
    EstamosPerdidosPage,
    HomePage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(configFirebase,'app-hot-dog'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BuscarAmigoPage,
    MisMensajesPage,
    EstamosPerdidosPage,
    HomePage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiciosAuthProvider
  ]
})
export class AppModule {}