import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[];

  constructor(public navCtrl: NavController) {
    this.items = [];

    for(let i = 0; i < 10; i++)
    {
      this.items.push(`Item ${i}`);
    }
  }

  private itemSelected(item: any): void{
    this.navCtrl.push(DetailPage, { item: item });
  }

}
