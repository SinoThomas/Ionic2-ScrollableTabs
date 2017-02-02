import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { ScrollableTabs } from '../components/scrollable-tabs/scrollable-tabs';

import { About } from '../pages/about/about';
import { Calendar } from '../pages/calendar/calendar';
import { Camera } from '../pages/camera/camera';
import { Cloud } from '../pages/cloud/cloud';
import { Contact } from '../pages/contact/contact';
import { Folder } from '../pages/folder/folder';
import { Home } from '../pages/home/home';
import { Map } from '../pages/map/map';
import { Settings } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    ScrollableTabs,
    About, Calendar, Camera, Cloud, Contact, Folder, Home, Map, Settings,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    About, Calendar, Camera, Cloud, Contact, Folder, Home, Map, Settings,
    TabsPage
  ],
  providers: []
})
export class AppModule { }
