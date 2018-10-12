import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@IonicPage({
  name: 'donation-page'
})

@Component({
  selector: 'page-donation',
  templateUrl: 'donation.html',
})

export class DonationPage {

	donationForm: FormGroup;
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
	cardSelectOptions: any = {
		cssClass: 'donation-card-select'
	};
	selectedCard: any;
	amount: Number;
	autoDraft: Boolean;
	nonprofitId: Number;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public fb: FormBuilder,
  	public alertCtrl: AlertController,
  	private storage: Storage,
    public modalCtrl: ModalController
  ) {
    this.donationForm = fb.group({
      selectedCard: ['', Validators.required],
      amount: ['', Validators.required]
    });
    this.nonprofitId = this.navParams.get('nonprofitId');
    this.storage.get('autoDrafts').then((autoDrafts) => {
    	if (autoDrafts && autoDrafts.length) {
    		let foundAutoDraft = autoDrafts.find(autoDraft => autoDraft.nonprofitId == this.nonprofitId);
    		if (foundAutoDraft) {
    			this.autoDraft = true;
    			this.amount = foundAutoDraft.amount;
    			this.selectedCard = foundAutoDraft.cardId;
    		}
    	}
    })
  }

	oneTimeDonate() {
		console.log('oneTimeDonate', this.selectedCard, this.amount);
    let alert = this.alertCtrl.create({
      message: 'Your payment has been accepted',
      buttons: ['OK']
    });
    alert.present();
		this.navCtrl.pop();
	}

	autoDraftChanged(autoDraftSelected) {
		let alertText;
		if (autoDraftSelected) {
			console.log('autoDraftChanged on', this.selectedCard, this.amount);
			alertText = 'Your auto draft payment has been accepted';
		  this.storage.get('autoDrafts').then((autoDrafts) => {
		  	let autoDraft = {
					cardId: this.selectedCard,
					amount: this.amount,
					nonprofitId: this.nonprofitId
				};
		    if (autoDrafts) {
					autoDrafts.push(autoDraft);
					this.storage.set('autoDrafts', autoDrafts);
		    }
		    else {
		    	autoDrafts = [autoDraft];
					this.storage.set('autoDrafts', autoDrafts);
		    }
		  })
		}
		else {
			console.log('autoDraftChanged off', this.selectedCard, this.amount);
			alertText = 'Your auto draft payment has been cancelled';
		  this.storage.get('autoDrafts').then((autoDrafts) => {
		  	let foundAutoDrafts = autoDrafts.filter(autoDraft => autoDraft.nonprofitId == this.nonprofitId);
		  	foundAutoDrafts.forEach(foundAutoDraft => autoDrafts.splice(autoDrafts.indexOf(foundAutoDraft), 1));
				this.storage.set('autoDrafts', autoDrafts);
		  })
		}
    let alert = this.alertCtrl.create({
      message: alertText,
      buttons: ['OK']
    });
    alert.present();
		this.navCtrl.pop();
	}

	addCard() {
    let addCardModal = this.modalCtrl.create('card-list-page', {
    	modal: true
    }, {
      enableBackdropDismiss: false
    });
    addCardModal.present();
    addCardModal.onDidDismiss((cards) => {
    	this.cards = cards;
    })
	}
}
