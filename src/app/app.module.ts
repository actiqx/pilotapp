import { FeedbackPage } from './../pages/feedback/feedback';
import { WelcomePage } from './../pages/welcome/welcome';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { LoginPage } from '../pages/login/login';
//Angular maps framework
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
@NgModule({
  declarations: [MyApp, LoginPage, WelcomePage],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBrtgXDLbb58ls_9ZAtvM1Wqo-7TDr_KJc'
    }),
    AgmDirectionModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, LoginPage, WelcomePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider
  ]
})
export class AppModule {}
