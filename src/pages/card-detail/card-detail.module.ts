import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardDetailPage } from './card-detail';
import { CardMaskDirectiveModule } from '../../directives/card-mask/card-mask.module';

@NgModule({
  declarations: [
    CardDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CardDetailPage),
    CardMaskDirectiveModule
  ],
})

export class CardDetailPageModule {}