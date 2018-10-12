import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'select-type-page'
})

@Component({
  selector: 'page-select-type',
  templateUrl: 'select-type.html',
})

export class SelectTypePage {

	buttons: Array<any> = [{
		text: 'User',
		color: 'blue',
		type: 'user'
	}, {
		text: 'Nonprofit',
		color: 'red',
		type: 'nonprofit'
	}, {
		text: 'Business',
		color: 'gray',
		type: 'business'
	}];

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams
  ) {
  }

  openPage(type) {
  	this.navCtrl.push('login-page', { type: type });
  }
}
