import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-folder',
  templateUrl: 'folder.html'
})
export class Folder {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Folder Page');
  }

}
