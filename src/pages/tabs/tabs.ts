import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventPage } from '../event/event';
import { ChatPage } from '../chat/chat';
import { SigninPage } from '../signin/signin';
import { CalendarPage } from '../calendar/calendar';
import { HomePage } from '../home/home';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
//this tell the tabs component which Pages
//should be each tab's root Page
  tab1Root: any = SigninPage;
  tab2Root: any = CalendarPage;
  tab3Root: any = HomePage;

  

}
