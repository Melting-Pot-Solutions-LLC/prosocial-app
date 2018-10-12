import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'card-detail-page'
})

@Component({
  selector: 'page-card-detail',
  templateUrl: 'card-detail.html',
})

export class CardDetailPage {

	card: any = {
		cardNumber: null,
		expMonth: null,
		expYear: null,
		cvc: null
	};
	pageTitle: String;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams
  ) {
  	let card = this.navParams.get('card');
  	this.pageTitle = card ? 'Edit' : 'Add';
  	if (card) {
  		this.card = card;
  		this.card['exp'] = this.card.expMonth + '/'+ this.card.expYear;
  	}
  }

  save() {
  	this.card.expMonth = this.card.exp.split('/')[0];
  	this.card.expYear = this.card.exp.split('/')[1];
  	console.log(this.card);
  	this.navCtrl.pop();
  }

  cardExpIsValid() {
  	var regex = /^\d{2}\/\d{2}$/;
  	return regex.test(this.card.exp);
  }
}
