import { Component } from '@angular/core';
import { IonicPage, NavController,
  Alert, AlertController, Loading, LoadingController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthProvider} from '../../providers/auth/auth';
import {EmailValidator} from '../../validators/email';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public signupForm: FormGroup;
  public loading: Loading;

  constructor(public navCtrl: NavController,
    public authProvider: AuthProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    formBuilder: FormBuilder) { 
      this.signupForm = formBuilder.group({
        email: [
          '',
          Validators.compose([Validators.required, EmailValidator.isValid])
        ],
        password: [
          '',
          Validators.compose([Validators.minLength(6), Validators.required])
        ]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  signupUser(): void{
    if(!this.signupForm.valid){
      console.log(`Need to complete the form, current value: ${this.signupForm.value}`);
    }else{
      const email: string = this.signupForm.value.email;
      const password: string = this.signupForm.value.password;

      this.authProvider.registerUser(email, password).then(user=>{
        this.loading.dismiss().then(()=>{
          this.navCtrl.setRoot(HomePage);
        });
      },
    error=>{
      this.loading.dismiss().then(()=>{
        const alert: Alert = this.alertCtrl.create({
          message: error.message,
          buttons: [{text: 'OK', role: 'cancel'}]
        });
        alert.present();
      });
    });
    this.loading=this.loadingCtrl.create();
    this.loading.present();
    }
  }

}
