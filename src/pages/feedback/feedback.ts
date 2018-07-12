import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  AlertController
} from 'ionic-angular';

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {
  // FeedBack Variable

  status = [];
  selectedStatus: any;
  showMotive: boolean;
  selectedMotive: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private alertCtrl: AlertController
  ) {
    this.status = [
      { id: 1, status_type: 'Success' },

      { id: 2, status_type: 'Failure' }
    ];

    this.showMotive = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
    console.log(this.navParams.get('message'));
  }

  onStatusTypeChange(selectedVal: any) {
    this.selectedStatus = selectedVal;
    console.log(this.selectedStatus);
    if (this.selectedStatus.id === 2) {
      this.showMotive = true;
    }
  }
  submitFeedBack() {
    let alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'FeedBack Submitted Successfully',
      buttons: ['Dismiss']
    });
    alert.present();
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
}
