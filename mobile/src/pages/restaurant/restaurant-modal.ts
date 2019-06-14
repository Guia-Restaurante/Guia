import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular'

import { AppHttpService } from '../../app/app-http.service'

@Component({
  template:`
  <ion-header>
    <ion-navbar>
      <button ion-button menuToggle (click)="back()">
        <ion-icon name="md-arrow-round-back"></ion-icon>
      </button>
      <ion-title>Avalie</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content padding>

  <ion-label>Deixe seu voto:</ion-label>

  <ion-icon name="md-star-outline" style="font-size:32px;"></ion-icon>
  <ion-icon name="md-star-outline" style="font-size:32px;"></ion-icon>
  <ion-icon name="md-star-outline" style="font-size:32px;"></ion-icon>
  <ion-icon name="md-star-outline" style="font-size:32px;"></ion-icon>
  <ion-icon name="md-star-outline" style="font-size:32px;"></ion-icon>
      
        <div class="input-field" margin-bottom="2px">
          <ion-item>
            <ion-textarea placeholder="O que achou do restaurante?" ></ion-textarea>
            <ion-input type="text" value="" [(ngModel)]="vote.comment"></ion-input>
          </ion-item>
        </div>
        <button ion-button block color="danger" round (click)="sendVote()">Avaliar</button>
      
  </ion-content>
  `
})
export class RestaurantModal {

  vote: any = {points: '', comment: ''};

  constructor(
    private navCtrl: NavController,
    private params: NavParams,
    private appHttpService: AppHttpService
    ){}

    sendVote() {
    let id = this.params.get('id') ;
      this.navCtrl.pop();
      this.vote.restaurant_id = id;
      this.appHttpService.builder('restaurants/vote')
        .insert(this.vote)
        .then(() => {
          this.vote = {points: '', comment: ''};
        })
    }

    back() {
      this.navCtrl.pop();
    }
}
