import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  name: 'nonprofit-categories-page'
})

@Component({
  selector: 'page-nonprofit-categories',
  templateUrl: 'nonprofit-categories.html',
})

export class NonprofitCategoriesPage {

	loadedItems: Array<any> = [{
		name: 'Favorites',
		imgSmall: 'http://s1.iconbird.com/ico/1012/PlexIcons/w512h5121350249279favorites.png'
	}, {
		id: 1,
		name: 'Medicine',
		imgSmall: 'https://mon.medikforum.ru/uploads/posts/2017-11/1510931305_medicina.jpg'
	}, {
		id: 2,
		name: 'Science',
		imgSmall: 'https://masheka.by/uploads/posts/2017-07/1501513271_nauka_mogilev.jpg'
	}, {
		id: 3,
		name: 'Culture',
		imgSmall: 'https://kultyres.ru/wp-content/uploads/2017/12/8n97b6546x3cv-300x225.jpg'
	}];
	items: Array<any>;
	selectedKeys: Array<any> = [];
	preparedKeys: Array<String>;

  constructor(
  	public navCtrl: NavController
  ) {
  	this.initItems();
  	this.preparedKeys = this.items.map(item => item.name.toLowerCase());
  // 	this.preparedKeys = this.items.reduce((prev, curr) => [...prev, ...curr.name.split(" ")], []).map(key => key.toLowerCase());
		// this.preparedKeys = this.preparedKeys.filter((preparedKey, index) => this.preparedKeys.indexOf(preparedKey) == index);
  }

  initItems() {
    this.items = this.loadedItems;
  }

  goToDetail(category) {
  	this.navCtrl.push('nonprofit-list-page', {
  		id: category.id,
  		name: category.name
  	});
  }

  updateKey(event) {
  	this.initItems();
  	if (this.selectedKeys.length)
  		this.items = this.items.filter(item => this.selectedKeys.find(key => item.name.toLowerCase().indexOf(key.value) != -1));
  }
}
