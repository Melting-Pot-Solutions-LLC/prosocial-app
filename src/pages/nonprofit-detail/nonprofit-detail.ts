import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage({
  name: 'nonprofit-detail-page'
})

@Component({
  selector: 'page-nonprofit-detail',
  templateUrl: 'nonprofit-detail.html',
})

export class NonprofitDetailPage {

	item: any = {
		id: 1,
		name: 'Nonprofit 1',
		logoImg: 'https://d1bile9su2eskg.cloudfront.net/wp-content/uploads/2014/09/Screen-Shot-2014-09-03-at-2.48.56-PM.png',
		photoImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/640px-New_york_times_square-terabass.jpg',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		website: 'https://nonprofit1.com',
		address: '441 Mount Eden Road, Mount Eden, Auckland.',
		level: 'Bronze',
		documentImg: 'https://www.openkm.com/resources/images/icon/document-management-big.png'
	};
  showToolbar: Boolean = false;
  transition: Boolean = false;
  following: Boolean = false;
  isHomePage: Boolean = true;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public ref: ChangeDetectorRef,
  	private storage: Storage,
  	private iab: InAppBrowser,
  	private socialSharing: SocialSharing
  ) {
  	let item = this.navParams.get('item');
  	if (item) {
  		this.item = item;
  		this.isHomePage = false;
		  storage.get('favoriteNonprofits').then((favorites) => {
		    if (favorites)
		    	this.following = favorites.indexOf(this.item.id) != -1;
		  })
  	}
  }

  onScroll($event) {
    let scrollTop = $event.scrollTop;
    this.showToolbar = scrollTop >= 80;
    if (scrollTop < 0)
      this.transition = false;
    else this.transition = true;
    this.ref.detectChanges();
  }

  follow() {
	  this.storage.get('favoriteNonprofits').then((favorites) => {
	    if (favorites) {
	    	if (this.following) {
					favorites.splice(favorites.indexOf(this.item.id), 1);
					this.storage.set('favoriteNonprofits', favorites);
	    	}
	    	else {
					favorites.push(this.item.id);
					this.storage.set('favoriteNonprofits', favorites);
	    	}
	    }
	    else {
	    	favorites = [this.item.id];
				this.storage.set('favoriteNonprofits', favorites);
	    }
	    this.following = !this.following;
	  })
  }

  donate() {
  	this.navCtrl.push('donation-page', { nonprofitId: this.item.id });
  }

  share() {
		this.socialSharing.share(
      this.item.name,
      null,
      null,
      this.item.website
		)
  }

  openWebsite(website) {
    this.iab.create(website, '_system', {location: 'yes'});
  }

  openBusinessSponsors(ids) {
    this.navCtrl.push('business-list-page', { ids: ids });
  }

  logout() {
  	this.storage.clear().then(() => {
  		this.navCtrl.setRoot('select-type-page');
  	})
  }

  edit() {
  	this.navCtrl.push('nonprofit-edit-page', { data: { ...this.item } });
  }
}
