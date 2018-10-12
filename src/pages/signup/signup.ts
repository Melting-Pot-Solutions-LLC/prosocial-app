import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';

@IonicPage({
  name: 'signup-page'
})

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {

	registerForm: FormGroup;
	defaultImage: String = 'assets/imgs/logo.png';
	type: String;
	profile: any = {
		image: '',
		name: '',
		email: '',
		password: ''
	};
	editMode: Boolean = false;

  constructor(
  	public navCtrl: NavController,
  	public fb: FormBuilder,
  	public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
  	private camera: Camera,
  	private storage: Storage
  ) {
    this.registerForm = fb.group({
    	name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required]
    });

    this.type = this.navParams.get('type');
    if (this.type == 'user') {
    	this.registerForm.addControl('phone', new FormControl('', Validators.required));
    	this.profile['phone'] = null;
    }
    else
    	this.profile.image = this.defaultImage;
    let data = this.navParams.get('data');
    if (data) {
    	this.profile = data;
    	this.editMode = true;
    }
  }

  save() {
  	console.log('save', this.profile);
  	this.navCtrl.pop();
  }

  register() {
  	console.log('registerUser', this.profile);
  	if (this.type == 'user') {
  		this.storage.set('type', this.type);
  		this.navCtrl.setRoot('user-detail-page')
  	}
  	else
  		this.navCtrl.setRoot(this.type + '-edit-page', { type: this.type });
  }

  facebookRegister() {
  	console.log('facebookRegister');
  	this.storage.set('type', this.type);
  	this.navCtrl.setRoot(this.type + '-detail-page');
  }

  googleRegister() {
  	console.log('googleRegister');
  	this.storage.set('type', this.type);
  	this.navCtrl.setRoot(this.type + '-detail-page');
  }

	getPictureFromCamera(sourceType) {
    return this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      encodingType: this.camera.EncodingType.PNG
    })
	}

	loadPhoto() {
		if (this.type == 'user') {
			// this.profile.image = 'assets/imgs/avatar.jpeg'
	    let actionSheet = this.actionSheetCtrl.create({
	      title: 'Upload image',
	      buttons: [
	        {
	          text: 'Take Photo',
	          handler: () => {
	          	this.getPictureFromCamera(this.camera.PictureSourceType.CAMERA).then((imageData) => {
	          		this.profile.image = 'data:image/png;base64,' + imageData;
	          	}, (error) => {
	              console.log(error);
	            })
	          }
	        }, {
	          text: 'Photo from Library',
	          handler: () => {
	          	this.getPictureFromCamera(this.camera.PictureSourceType.PHOTOLIBRARY).then((imageData) => {
	          		this.profile.image = 'data:image/png;base64,' + imageData;
	          	}, (error) => {
	              console.log(error);
	            })
	          }
	        }, {
	          text: 'Cancel',
	          role: 'cancel'
	        }
	      ]
	    });
	    actionSheet.present();
		}
	}
}
