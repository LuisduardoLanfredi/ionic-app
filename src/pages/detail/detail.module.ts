import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DetailPage } from './detail';

@NgModule({
  declarations: [
    DetailPage,
  ],
  imports: [
    IonicModule.forRoot(DetailPage),
  ],
  exports: [
    DetailPage
  ]
})
export class DetailModule {}
