import { NgModule } from '@angular/core';
import { CardMaskDirective } from './card-mask';

@NgModule({
  declarations: [
  	CardMaskDirective
  ],
  exports: [
  	CardMaskDirective
  ]
})
export class CardMaskDirectiveModule {}