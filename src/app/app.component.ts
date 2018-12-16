import { Component , ViewChild } from '@angular/core';
import { Platform , Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  @ViewChild(Nav) nav:Nav;

  pages :any[] = [
    {title :'login' , component: 'LoginPage'}
  ]

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp({
      apiKey: 'AIzaSyDwCe3JJmAB71kkOWapFAIzVsC7XsTzG-A',
      authDomain: 'agri101-89218.firebaseapp.com',
      databaseURL: 'https://agri101-89218.firebaseio.com',
      storageBucket: 'agri101-89218.appspot.com',
      messagingSenderId: '147457580926',
        });
  }
}
