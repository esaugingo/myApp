import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NextpagePage} from '../nextpage/nextpage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  nextpage(){
    this.navCtrl.push(NextpagePage);
  }
}
