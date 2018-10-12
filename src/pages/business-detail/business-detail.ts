import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Storage } from '@ionic/storage';

@IonicPage({
  name: 'business-detail-page'
})

@Component({
  selector: 'page-business-detail',
  templateUrl: 'business-detail.html',
})

export class BusinessDetailPage {

	item: any = {
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
	};
  showToolbar: Boolean = false;
  transition: Boolean = false;
  isHomePage: Boolean = true;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public ref: ChangeDetectorRef,
  	private iab: InAppBrowser,
  	private storage: Storage
  ) {
  	let item = this.navParams.get('item');
  	if (item) {
  		this.item = item;
  		this.isHomePage = false;
  	};
  	if (this.item.nonprofits)
  		this.item.nonprofits = this.item.nonprofits.join('∙');
  }

  onScroll($event) {
    let scrollTop = $event.scrollTop;
    this.showToolbar = scrollTop >= 80;
    if (scrollTop < 0)
      this.transition = false;
    else this.transition = true;
    this.ref.detectChanges();
  }

  openWebsite(website) {
    this.iab.create(website, '_system', {location: 'yes'});
  }

  logout() {
  	this.storage.clear().then(() => {
  		this.navCtrl.setRoot('select-type-page');
  	})
  }

  edit() {
  	let data = { ...this.item };
  	if (data.nonprofits)
  		data.nonprofits = data.nonprofits.split('∙');
  	this.navCtrl.push('business-edit-page', { data: data });
  }
}
