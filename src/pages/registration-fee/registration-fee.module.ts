import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrationFeePage } from './registration-fee';
import { CardMaskDirectiveModule } from '../../directives/card-mask/card-mask.module';

@NgModule({
  declarations: [
    RegistrationFeePage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrationFeePage),
    CardMaskDirectiveModule
  ],
})

export class RegistrationFeePageModule {}