import { Component } from '@angular/core';
import { IonicPage, NavController,ModalController,AlertController } from 'ionic-angular';
import * as moment from 'moment';
import { CalendarComponentOptions } from 'ion2-calendar';


/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  date: string;
  type: 'string';
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
 
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  optionsBasic: CalendarComponentOptions = {};
  
  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController) { }
 
  addEvent() {
    let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;
 
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);
 
        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }
  changeMode(mode) {
    this.calendar.mode = mode;
}
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }

  monthChange($event){
    console.log($event);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

}
