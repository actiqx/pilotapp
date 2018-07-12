import { LandPage } from './../land/land';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  Loading,
  AlertController,
  LoadingController,
  ModalController
} from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;
  registerCredentials = {
    userName: '',
    password: ''
  };
  constructor(
    private nav: NavController,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
    
  ) {}

  public login() {
    this.showLoading();
    this.nav.setRoot('LandPage');
    // this.auth.login(this.registerCredentials).subscribe(
    //   allowed => {
    //     if (allowed) {
    //       this.nav.setRoot('HomePage');
    //     } else {
    //       this.showError('Access Denied');
    //     }
    //   },
    //   error => {
    //     this.showError(error);
    //   }
    // );
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }
}
