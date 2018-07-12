import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from 'ionic-angular';

/**
 * Generated class for the LandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-land',
  templateUrl: 'land.html'
})
export class LandPage {
  // Map Variable

  lat: number = 19.432608;

  lng: number = -99.133209;

  marker: {
    lat: number;

    lng: number;

    iconUrl: string;
  };

  origin: {};

  destination: {};

  waypoints = [];

  public dir = undefined;

  locationChoosen = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    this.marker = {
      lat: 19.381306,

      lng: -99.101111,

      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
    };

    this.origin = {
      lat: 19.3898194,

      lng: -99.2540159
    };

    this.destination = {
      lat: 19.452686,

      lng: -99.057145
    };

    this.waypoints = [
      {
        location: { lat: 19.358079, lng: -99.154452 },

        stopover: true
      },

      {
        location: { lat: 19.363909, lng: -99.129046 },

        stopover: true
      },

      {
        location: { lat: 19.424791, lng: -99.093341 },

        stopover: true
      }
    ];

    this.status = [
      { id: 1, status_type: 'Success' },

      { id: 2, status_type: 'Failure' }
    ];

    this.showMotive = false;
  }
  openModal() {
    var data = { message: 'hello world' };
    var modalPage = this.modalCtrl.create('FeedbackPage', data);
    modalPage.present();
  }
}
