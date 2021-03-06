import { Component } from '@angular/core';
import * as jQuery from 'jquery';
import { AuthService } from './user/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  me = null;
  obj = {};
  currentYear = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    jQuery('#showMenu').sideNav();

    this.authService.eventEmitter.subscribe(() => {
      this.getUserData();
    });

    let today = new Date();
    this.currentYear = today.getFullYear();
  }

  protected getUserData() {
    this.authService.getUser()
      .then((res) =>{
        this.me = res;
        if (res.status === 401) {
          this.me = null;
        }
      })
      .catch((err) => {
        this.me = null;
      })
  }
}
