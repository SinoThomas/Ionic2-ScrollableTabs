import { Component, ViewChild } from '@angular/core';
import { ToastController } from 'ionic-angular';

import { About } from '../about/about';
import { Calendar } from '../calendar/calendar';
import { Camera } from '../camera/camera';
import { Cloud } from '../cloud/cloud';
import { Contact } from '../contact/contact';
import { Folder } from '../folder/folder';
import { Home } from '../home/home';
import { Map } from '../map/map';
import { Settings } from '../settings/settings';

import { ScrollableTabs } from '../../components/scrollable-tabs/scrollable-tabs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // this tells the tabs component which Pages
  // should be each tab's root Page
  AboutRoot: any = About;
  CalendarRoot: any = Calendar;
  CameraRoot: any = Camera;
  CloudRoot: any = Cloud;
  ContactRoot: any = Contact;
  FolderRoot: any = Folder;
  HomeRoot: any = Home;
  MapRoot: any = Map;
  SettingsRoot: any = Settings;

  tabsColor: string = "default";
  tabsMode: string = "md";
  tabsPlacement: string = "top";

  tabToShow: Array<boolean> = [true, true, true, true, true, true, true, true, true];
  scrollableTabsopts: any = {};

  constructor(private toastCtrl: ToastController) {
  }

  ionViewDidEnter() {

  }

  refreshScrollbarTabs() {
    this.scrollableTabsopts = { refresh: true };    
  }

  presentChangeOrendationToast() {
    let toast = this.toastCtrl.create({
      message: 'Rotate screen to rerendering.',
      duration: 2000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
