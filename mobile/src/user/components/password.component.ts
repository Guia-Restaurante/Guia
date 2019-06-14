import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'
import {AlertController} from "ionic-angular";


@Component({
    selector: 'app-password',
    templateUrl: './password.component.html'
})
export class PasswordComponent{
    constructor(
      private authService: AuthService,
      private alertCtrl: AlertController,

    ){}

    user: any = {
        password: null,
        password_confirmation: null
    }

    ngOnInit () {}

    save() {

        if (this.user.password && this.user.password === this.user.password_confirmation) {
                this.authService.builder().changePassword(this.user)
                    .then(() => {
                      this.showAlert('Salvo com sucesso');
                    });
        }else{
          this.showAlert('Verifique a senha');
        }
    }

  private showAlert(message){
    let prompt = this.alertCtrl.create({
      title: 'Verifique seus dados',
      message: message,
      buttons:[
        {
          text: 'ok',
          handler: data => {
            console.log('clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}
