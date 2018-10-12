import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardListPage } from './card-list';
import { CardNumberPipeModule } from '../../pipes/card-number/card-number.module';

@NgModule({
  declarations: [
    CardListPage,
  ],
  imports: [
    IonicPageModule.forChild(CardListPage),
    CardNumberPipeModule
  ],
})

export class CardListPageModule {}