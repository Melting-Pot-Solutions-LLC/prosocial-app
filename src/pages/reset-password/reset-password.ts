import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage({
  name: 'reset-password-page'
})

@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})

export class ResetPasswordPage {

	resetPasswordForm: FormGroup;
	email: String;

  constructor(
  	public navCtrl: NavController,
  	public fb: FormBuilder,
  	public alertCtrl: AlertController
  ) {
    this.resetPasswordForm = fb.group({
      email: ['', Validators.email]
    })
  }

  resetPassword() {
  	console.log('resetPassword', this.email);
    let alert = this.alertCtrl.create({
      message: 'We just sent you a reset link to your email',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.pop();
  }
}
