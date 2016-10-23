import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Camera page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class Camera {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Camera Page');
  }

}
