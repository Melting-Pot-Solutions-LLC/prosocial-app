import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NonprofitDetailPage } from './nonprofit-detail';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    NonprofitDetailPage
  ],
  imports: [
    IonicPageModule.forChild(NonprofitDetailPage),
    MomentModule
  ],
})

export class NonprofitDetailPageModule {}