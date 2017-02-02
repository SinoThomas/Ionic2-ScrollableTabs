import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class Contact {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Contact Page');
  }

}
