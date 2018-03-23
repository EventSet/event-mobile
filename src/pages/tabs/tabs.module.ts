import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';




@NgModule({
  declarations: [
    TabsPage,
    
    
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
 
   
   
    
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TabsPageModule {}
