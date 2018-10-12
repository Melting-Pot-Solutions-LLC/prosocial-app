import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NonprofitCategoriesPage } from './nonprofit-categories';
import { TagInputModule } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NonprofitCategoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(NonprofitCategoriesPage),
    TagInputModule,
		FormsModule,
		ReactiveFormsModule
  ],
})

export class NonprofitCategoriesPageModule {}