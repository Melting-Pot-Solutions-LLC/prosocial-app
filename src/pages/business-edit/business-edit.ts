import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';

@IonicPage({
  name: 'business-edit-page'
})

@Component({
  selector: 'page-business-edit',
  templateUrl: 'business-edit.html',
})

export class BusinessEditPage {

	businessEditForm: FormGroup;
	profile: any = {
		photoImg: '',
		logoImg: '',
		description: '',
		website: '',
		address: '',
		sale: null,
		nonprofits: null
	};
	pageTitle: String = 'Add';
	buttonTitle: String = 'Registration Fee';
	type: String;
	categories: Array<any> = [{
		id: 1,
		name: 'Medicine'
	}, {
		id: 2,
		name: 'Science'
	}, {
		id: 3,
		name: 'Culture'
	}, {
		id: 4,
		name: 'Social'
	}];
	saleCategories: any;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public fb: FormBuilder,
    public actionSheetCtrl: ActionSheetController,
  	private camera: Camera
  ) {
    this.businessEditForm = fb.group({
    	description: ['', Validators.required],
      website: ['', Validators.required],
      address: ['', Validators.required]
    });

    this.type = this.navParams.get('type');
  	let profileData = this.navParams.get('data');
  	if (profileData) {
  		this.profile = profileData;
  		if (this.profile.nonprofits)
  			this.profile.nonprofits = this.categories.filter(category => this.profile.nonprofits.indexOf(category.name.toLowerCase()) != -1).map(category => category.id.toString());
  		else this.profile.nonprofits = [];
  		this.pageTitle = 'Update';
  		this.buttonTitle = 'Save';
  	}
  }

	getPictureFromCamera() {
    return new Promise((resolve, reject) => {
	    let actionSheet = this.actionSheetCtrl.create({
	      title: 'Upload image',
	      buttons: [{
          text: 'Take Photo',
          handler: () => {
				    this.camera.getPicture({
				      destinationType: this.camera.DestinationType.DATA_URL,
				      sourceType: this.camera.PictureSourceType.CAMERA,
				      encodingType: this.camera.EncodingType.PNG
				    }).then((imageData) => {
          		resolve('data:image/png;base64,' + imageData);
          	}, (error) => {
              reject(error);
            })
          }
        }, {
          text: 'Photo from Library',
          handler: () => {
				    this.camera.getPicture({
				      destinationType: this.camera.DestinationType.DATA_URL,
				      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
				      encodingType: this.camera.EncodingType.PNG
				    }).then((imageData) => {
          		resolve('data:image/png;base64,' + imageData);
          	}, (error) => {
              reject(error);
            })
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            reject();
          }
	      }]
	    });
	    actionSheet.present();
    })
	}

	loadPhotoImg() {
		// this.profile.photoImg = 'assets/imgs/avatar.jpeg';
		this.getPictureFromCamera().then(image => {
			this.profile.photoImg = image
		}, error => console.log(error));
	}

	loadLogoImg() {
		// this.profile.logoImg = 'assets/imgs/avatar.jpeg';
		this.getPictureFromCamera().then(image => {
			this.profile.logoImg = image
		}, error => console.log(error));
	}

	save() {
		this.profile.nonprofits = this.categories.filter(category => this.profile.nonprofits.indexOf(category.id.toString()) != -1).map(category => category.name.toLowerCase());
		if (this.type) {
			console.log('registrationFee', this.profile);
			this.navCtrl.setRoot('registration-fee-page', { type: this.type });
		}
		else {
			console.log('save', this.profile);
			this.navCtrl.pop();
		}
	}
}
