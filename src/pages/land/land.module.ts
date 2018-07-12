import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandPage } from './land';
import { AgmDirectionModule } from 'agm-direction';
import { FeedbackPage } from '../feedback/feedback';

@NgModule({
  declarations: [LandPage],
  imports: [
    IonicPageModule.forChild(LandPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBrtgXDLbb58ls_9ZAtvM1Wqo-7TDr_KJc'
    }),
    AgmDirectionModule
  ]
})
export class LandPageModule {}
