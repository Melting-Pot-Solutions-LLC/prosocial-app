import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonationPage } from './donation';
import { CardNumberPipeModule } from '../../pipes/card-number/card-number.module';

@NgModule({
  declarations: [
    DonationPage,
  ],
  imports: [
    IonicPageModule.forChild(DonationPage),
    CardNumberPipeModule
  ],
})

export class DonationPageModule {}