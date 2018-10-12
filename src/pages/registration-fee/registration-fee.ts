import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@IonicPage({
  name: 'registration-fee-page'
})

@Component({
  selector: 'page-registration-fee',
  templateUrl: 'registration-fee.html',
})

export class RegistrationFeePage {

	cardNumber: String;
	cardExp: String;
	cardCvc: String;
	registrationFeeForm: FormGroup;
	businessLevels: Array<any> = [{
		name: 'bronze',
		label: 'Bronze Level',
		price: '$50'
	}, {
		name: 'silver',
		label: 'Silver Level',
		price: '$250'
	}];
	nonprofitLevels: Array<any> = [{
		name: 'bronze',
		label: 'Bronze Level',
		price: '30 days free'
	}, {
		name: 'silver',
		label: 'Silver Level',
		price: '$50/month'
	}];
	levels: Array<any>;
	selectedLevel: String = 'bronze';
	type: String;
	buttonTitle: String;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public fb: FormBuilder,
  	private storage: Storage,
  	public alertCtrl: AlertController
  ) {
    this.registrationFeeForm = fb.group({
    	cardNumber: ['', Validators.required],
      cardExp: ['', Validators.compose([Validators.required, Validators.pattern(/^\d{2}\/\d{2}$/)])],
      cardCvc: ['', Validators.required]
    });

    this.type = this.navParams.get('type');
    if (this.type == 'business') {
    	this.levels = this.businessLevels;
    	this.buttonTitle = 'Pay';
    }
    else if (this.type == 'nonprofit') {
    	this.levels = this.nonprofitLevels;
    	this.buttonTitle = 'Submit';
    }
  }

  submit() {
		console.log('submit', this.cardNumber, this.cardExp.split('/')[0], this.cardExp.split('/')[1], this.cardCvc, this.selectedLevel);
		this.storage.set('type', this.type);
		let alertText = 'Your data has been sent for review.';
		if (!((this.type == 'nonprofit') && (this.selectedLevel == 'bronze')))
			alertText = 'Your payment has been accepted. ' + alertText;
    let alert = this.alertCtrl.create({
      message: alertText,
      buttons: ['OK']
    });
    alert.present();
		this.navCtrl.setRoot(this.type + '-detail-page');
  }
}
