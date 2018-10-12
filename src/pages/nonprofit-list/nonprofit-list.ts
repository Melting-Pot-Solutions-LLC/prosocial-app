import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import moment from 'moment';

@IonicPage({
  name: 'nonprofit-list-page'
})

@Component({
  selector: 'page-nonprofit-list',
  templateUrl: 'nonprofit-list.html',
})

export class NonprofitListPage {

	loadedItems: Array<any> = [{
		id: 1,
		name: 'Nonprofit 1',
		logoImg: 'https://d1bile9su2eskg.cloudfront.net/wp-content/uploads/2014/09/Screen-Shot-2014-09-03-at-2.48.56-PM.png',
		photoImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/640px-New_york_times_square-terabass.jpg',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		website: 'https://nonprofit1.com',
		address: '441 Mount Eden Road, Mount Eden, Auckland.',
		businessSponsors: [2, 3],
		reviews: [{
			date: moment('12.19.2017 12:31', 'MM.DD.YYYY HH:mm'),
			from: 'Steve',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			stars: 4
		}, {
			date: moment('12.20.2017 12:31', 'MM.DD.YYYY HH:mm'),
			from: 'John',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			stars: 5
		}, {
			date: moment('12.21.2017 12:31', 'MM.DD.YYYY HH:mm'),
			from: 'Jack',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			stars: 4
		}],
		level: 'Bronze'
	}, {
		id: 2,
		name: 'Nonprofit 2',
		logoImg: 'https://www.sageintacct.com/sites/default/files/field/image/nonprofit-image_0.jpg',
		photoImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/640px-New_york_times_square-terabass.jpg',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		website: 'https://nonprofit2.com',
		address: '441 Mount Eden Road, Mount Eden, Auckland.',
		businessSponsors: [2, 3],
		reviews: [{
			date: moment('12.19.2017 12:31', 'MM.DD.YYYY HH:mm'),
			from: 'Steve',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			stars: 4
		}, {
			date: moment('12.20.2017 12:31', 'MM.DD.YYYY HH:mm'),
			from: 'John',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			stars: 5
		}, {
			date: moment('12.21.2017 12:31', 'MM.DD.YYYY HH:mm'),
			from: 'Jack',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			stars: 4
		}],
		level: 'Bronze'
	}, {
		id: 3,
		name: 'Nonprofit 3',
		logoImg: 'https://www.thetrust.com/wp-content/uploads/2017/12/non-profit.jpg',
		photoImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/640px-New_york_times_square-terabass.jpg',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		website: 'https://nonprofit3.com',
		address: '441 Mount Eden Road, Mount Eden, Auckland.',
		businessSponsors: [2, 3],
		reviews: [{
			date: moment('12.19.2017 12:31', 'MM.DD.YYYY HH:mm'),
			from: 'Steve',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			stars: 4
		}, {
			date: moment('12.20.2017 12:31', 'MM.DD.YYYY HH:mm'),
			from: 'John',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			stars: 5
		}, {
			date: moment('12.21.2017 12:31', 'MM.DD.YYYY HH:mm'),
			from: 'Jack',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			stars: 4
		}],
		level: 'Bronze'
	}, {
		id: 4,
		name: 'Nonprofit 4',
		logoImg: 'https://texarkana.org/wp-content/uploads/2017/03/Non-profit-partners-hands-with-hearts-clip-art.png',
		photoImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/640px-New_york_times_square-terabass.jpg',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		website: 'https://nonprofit4.com',
		address: '441 Mount Eden Road, Mount Eden, Auckland.',
		businessSponsors: [2, 3],
		reviews: [{
			date: moment('12.19.2017 12:31', 'MM.DD.YYYY HH:mm'),
			from: 'Steve',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			stars: 4
		}, {
			date: moment('12.20.2017 12:31', 'MM.DD.YYYY HH:mm'),
			from: 'John',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			stars: 5
		}, {
			date: moment('12.21.2017 12:31', 'MM.DD.YYYY HH:mm'),
			from: 'Jack',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			stars: 4
		}],
		level: 'Silver'
	}];
	items: Array<any>;
	selectedKeys: Array<any> = [];
	preparedKeys: Array<String>;
	pageTitle: String;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	storage: Storage
  ) {
  	this.pageTitle = this.navParams.get('name');
  	if (!this.navParams.get('id'))
		  storage.get('favoriteNonprofits').then((favorites) => {
		    if (favorites)
		    	this.loadedItems = this.loadedItems.filter(loadedItem => favorites.indexOf(loadedItem.id) != -1)
		    else
		    	this.loadedItems = [];
		    this.initData();
		  })
		else this.initData();
  }

  initData() {
		this.initItems();
		this.preparedKeys = this.items.map(item => item.name.toLowerCase());
		// this.preparedKeys = this.items.reduce((prev, curr) => [...prev, ...curr.name.split(" ")], []).map(key => key.toLowerCase());
		// this.preparedKeys = this.preparedKeys.filter((preparedKey, index) => this.preparedKeys.indexOf(preparedKey) == index);
  }

  initItems() {
    this.items = this.loadedItems;
  }

  goToDetail(item) {
  	this.navCtrl.push('nonprofit-detail-page', { item: item });
  }

  updateKey(event) {
  	this.initItems();
  	if (this.selectedKeys.length)
  		this.items = this.items.filter(item => this.selectedKeys.find(key => item.name.toLowerCase().indexOf(key.value) != -1));
  }
}
