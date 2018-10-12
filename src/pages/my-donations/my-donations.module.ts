import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyDonationsPage } from './my-donations';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    MyDonationsPage
  ],
  imports: [
    IonicPageModule.forChild(MyDonationsPage),
    MomentModule
  ],
})

export class MyDonationsPageModule {}