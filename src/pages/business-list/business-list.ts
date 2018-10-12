import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'business-list-page'
})

@Component({
  selector: 'page-business-list',
  templateUrl: 'business-list.html',
})

export class BusinessListPage {

	items: Array<any> = [{
		id: 1,
		name: 'Company 1',
		sale: 25,
		logoImg: 'https://images.samsung.com/is/image/samsung/p5/pk/aboutsamsung/2017/home/samsung-main-menu-company-large.jpg',
		photoImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/640px-New_york_times_square-terabass.jpg',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		website: 'https://company1.com',
		address: '441 Mount Eden Road, Mount Eden, Auckland.',
		nonprofits: ['medicine', 'science', 'culture'],
		level: 'Bronze'
	}, {
		id: 2,
		name: 'Company 2',
		logoImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Coca-ColaHQ.jpg/220px-Coca-ColaHQ.jpg',
		photoImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/640px-New_york_times_square-terabass.jpg',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		website: 'https://company2.com',
		address: '442 Mount Eden Road, Mount Eden, Auckland.',
		level: 'Silver'
	}, {
		id: 3,
		name: 'Company 3',
		sale: 30,
		logoImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Aeon_Tower_2.jpg/250px-Aeon_Tower_2.jpg',
		photoImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/640px-New_york_times_square-terabass.jpg',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		website: 'https://company3.com',
		address: '443 Mount Eden Road, Mount Eden, Auckland.',
		nonprofits: ['medicine', 'science', 'culture'],
		level: 'Silver'
	}];

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams
  ) {
  	let ids = this.navParams.get('ids');
  	if (ids)
  		this.items = this.items.filter(item => ids.indexOf(item.id) != -1);
  }

  goToDetail(item) {
  	this.navCtrl.push('business-detail-page', { item: item });
  }
}
