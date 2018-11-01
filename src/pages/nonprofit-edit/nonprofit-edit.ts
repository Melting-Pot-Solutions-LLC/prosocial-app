import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';

@IonicPage({
  name: 'nonprofit-edit-page'
})

@Component({
  selector: 'page-nonprofit-edit',
  templateUrl: 'nonprofit-edit.html',
})

export class NonprofitEditPage {

	nonprofitEditForm: FormGroup;
	profile: any = {
		photoImg: '',
		logoImg: '',
		description: '',
		website: '',
		address: '',
		documentImg: ''
	};
	pageTitle: String = 'Add';
	buttonTitle: String = 'Registration Fee';
	type: String;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public fb: FormBuilder,
    public actionSheetCtrl: ActionSheetController,
  	private camera: Camera
  ) {
    this.nonprofitEditForm = fb.group({
    	description: ['', Validators.required],
      website: ['', Validators.required],
      address: ['', Validators.required]
    });
    
    this.type = this.navParams.get('type');
  	let profileData = this.navParams.get('data');
  	if (profileData) {
  		this.profile = profileData;
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

	loadDocumentImg() {
		// this.profile.documentImg = 'assets/imgs/avatar.jpeg';
		this.getPictureFromCamera().then(image => {
			this.profile.documentImg = image
		}, error => console.log(error));
	}

	save() {
		if (this.type) {
			console.log('registrationFee', this.profile);
			this.navCtrl.push('registration-fee-page', { type: this.type });
		}
		else {
			console.log('save', this.profile);
			this.navCtrl.pop();
		}
	}
}
