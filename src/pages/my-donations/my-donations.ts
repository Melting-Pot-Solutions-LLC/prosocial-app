import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import moment from 'moment';

@IonicPage({
  name: 'my-donations-page'
})

@Component({
  selector: 'page-my-donations',
  templateUrl: 'my-donations.html',
})

export class MyDonationsPage {

	items: Array<any> = [{
		id: 1,
		name: 'Nonprofit 1',
		imgSmall: 'https://d1bile9su2eskg.cloudfront.net/wp-content/uploads/2014/09/Screen-Shot-2014-09-03-at-2.48.56-PM.png',
		date: moment('12.21.2017 12:45', 'MM.DD.YYYY HH:mm'),
		amount: 25
	}, {
		id: 2,
		name: 'Nonprofit 2',
		imgSmall: 'https://www.sageintacct.com/sites/default/files/field/image/nonprofit-image_0.jpg',
		date: moment('12.21.2017 12:35', 'MM.DD.YYYY HH:mm'),
		amount: 15
	}, {
		id: 3,
		name: 'Nonprofit 3',
		imgSmall: 'https://www.thetrust.com/wp-content/uploads/2017/12/non-profit.jpg',
		date: moment('12.21.2017 12:31', 'MM.DD.YYYY HH:mm'),
		amount: 10
	}];

  constructor(
  	public navCtrl: NavController
  ) {
  }
}
