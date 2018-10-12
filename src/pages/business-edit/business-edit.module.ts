import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessEditPage } from './business-edit';

@NgModule({
  declarations: [
    BusinessEditPage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessEditPage)
  ]
})

export class BusinessEditPageModule {}