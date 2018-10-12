import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage({
  name: 'card-list-page'
})

@Component({
  selector: 'page-card-list',
  templateUrl: 'card-list.html',
})

export class CardListPage {

	cards: Array<any> = [{
		id: 1,
		cardNumber: '4242424242424241',
		expMonth: 12,
		expYear: 20,
		cvc: 220
	}, {
		id: 2,
		cardNumber: '4242424242424242',
		expMonth: 10,
		expYear: 22,
		cvc: 220
	}, {
		id: 3,
		cardNumber: '4242424242424243',
		expMonth: 11,
		expYear: 21,
		cvc: 220
	}];
	modal: Boolean;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private view: ViewController
  ) {
  	this.modal = this.navParams.get('modal');
  }

  closeModal() {
		this.view.dismiss(this.cards);
  }

  editCard(card) {
  	this.navCtrl.push('card-detail-page', { card: card });
  }

  addCard() {
  	this.navCtrl.push('card-detail-page');
  }

  removeCard(card) {
  	console.log('remove: ', card);
  }
}
