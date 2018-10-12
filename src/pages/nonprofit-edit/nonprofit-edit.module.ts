import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NonprofitEditPage } from './nonprofit-edit';

@NgModule({
  declarations: [
    NonprofitEditPage,
  ],
  imports: [
    IonicPageModule.forChild(NonprofitEditPage)
  ]
})

export class NonprofitEditPageModule {}