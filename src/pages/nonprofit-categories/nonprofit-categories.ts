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
		imgSmall: 'http://cdn.24.co.za/files/Cms/General/d/1936/6027f9e09d4d4138abc8deadc68d31e9.jpg'
	}, {
		id: 2,
		name: 'Science',
		imgSmall: 'https://www.macleans.ca/wp-content/uploads/2013/01/158630363-1.jpg'
	}, {
		id: 3,
		name: 'Culture',
		imgSmall: 'https://imgc.artprintimages.com/img/print/singapore-chinatown-sri-mariamman-hindu-temple-hindu-deity-detail_u-l-q13bqmr0.jpg'
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
