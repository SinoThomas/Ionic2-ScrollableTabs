import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cloud',
  templateUrl: 'cloud.html'
})
export class Cloud {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Cloud Page');
  }

}
