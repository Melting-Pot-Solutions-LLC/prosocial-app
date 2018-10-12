import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage({
  name: 'user-detail-page'
})

@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html'
})

export class UserDetailPage {

	buttons: Array<any> = [{
		text: 'Nonprofits',
		page: 'nonprofit-categories-page'
	}, {
		text: 'Business',
		page: 'business-list-page'
	}, {
		text: 'My Donations',
		page: 'my-donations-page'
	}, {
		text: 'News',
		page: ''
	}, {
		text: 'Notifications',
		page: ''
	}, {
		text: 'Card Settings',
		page: 'card-list-page'
	}];
	profile: any = {
		image: 'assets/imgs/avatar.jpeg',
		name: 'John Smith',
		email: 'demo@gmail.com',
		phone: '15417543010',
		password: 123456789
	};

  constructor(
  	public navCtrl: NavController,
  	private storage: Storage
  ) {
  }

  openPage(pageName) {
  	this.navCtrl.push(pageName);
  }

  logout() {
  	this.storage.clear().then(() => {
  		this.navCtrl.setRoot('select-type-page');
  	})
  }

  edit() {
  	this.navCtrl.push('signup-page', {
  		type: 'user',
  		data: { ...this.profile }
  	})
  }
}