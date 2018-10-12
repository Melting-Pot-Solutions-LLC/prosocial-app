import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NonprofitListPage } from './nonprofit-list';
import { TagInputModule } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NonprofitListPage,
  ],
  imports: [
    IonicPageModule.forChild(NonprofitListPage),
    TagInputModule,
		FormsModule,
		ReactiveFormsModule
  ],
})

export class NonprofitListPageModule {}