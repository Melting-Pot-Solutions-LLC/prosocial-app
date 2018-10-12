import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})

export class ProsocialApp {

  rootPage: String;

  constructor(
  	platform: Platform,
  	statusBar: StatusBar,
  	splashScreen: SplashScreen,
  	storage: Storage
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (platform.is('ios'))
      	statusBar.styleDefault()
      else if (platform.is('android'))
      	statusBar.styleLightContent();
      splashScreen.hide();

		  storage.get('type').then((type) => {
		    if (type)
		    	this.rootPage = type + '-detail-page'
		    else
		    	this.rootPage = 'select-type-page';
		  })
    })
  }
}

