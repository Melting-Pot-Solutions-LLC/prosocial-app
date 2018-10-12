import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@IonicPage({
  name: 'login-page'
})

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

	loginForm: FormGroup;
	type: String;
	email: String;
	password: String;

  constructor(
  	public navCtrl: NavController,
  	public fb: FormBuilder,
  	public navParams: NavParams,
  	private storage: Storage
  ) {
  	this.type = this.navParams.get('type');
    this.loginForm = fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }

  login() {
  	console.log('login', this.email, this.password);
  	this.storage.set('type', this.type);
  	this.navCtrl.setRoot(this.type + '-detail-page');
  }

  facebookLogin() {
  	console.log('facebookLogin');
  	this.storage.set('type', this.type);
  	this.navCtrl.setRoot(this.type + '-detail-page');
  }

  googleLogin() {
  	console.log('googleLogin');
  	this.storage.set('type', this.type);
  	this.navCtrl.setRoot(this.type + '-detail-page');
  }

  signup() {
  	this.navCtrl.push('signup-page', { type: this.type });
  }

  resetPassword() {
  	this.navCtrl.push('reset-password-page');
  }
}
