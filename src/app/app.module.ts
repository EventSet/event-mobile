import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
//import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { EventProvider } from '../providers/event/event';
import { ProfileProvider } from '../providers/profile/profile';
import {TabsPage} from '../pages/tabs/tabs';
import { AddRoomPage } from '../pages/add-room/add-room';
import { SigninPage } from '../pages/signin/signin';
import { ChatPage } from '../pages/chat/chat';
import { RoomPage } from '../pages/room/room';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { CalendarPage } from '../pages/calendar/calendar';
import {NgCalendarModule} from 'ionic2-calendar';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //TabsPage,
    ChatPage,
    AddRoomPage,
    SigninPage,
    RoomPage,
    CalendarPage
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TabsPageModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ChatPage,
    AddRoomPage,
    SigninPage,
    RoomPage,
    CalendarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    EventProvider,
    ProfileProvider,
    //Camera
  ]
})
export class AppModule {}
