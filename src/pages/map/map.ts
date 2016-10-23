import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class Map {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Map Page');
  }

}
