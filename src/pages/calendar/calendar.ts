import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
export class Calendar {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Calendar Page');
  }

}
