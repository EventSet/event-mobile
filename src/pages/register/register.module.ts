import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { TabsPage } from '../tabs/tabs';

@NgModule({
  declarations: [
    RegisterPage,
   
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
  ],
})
export class RegisterPageModule {}
