import { Component, OnInit   } from '@angular/core';
import {AuthService} from "../../user/services/auth.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit{

  constructor(
    protected authService: AuthService,
  ){}
    ngOnInit () {
      this.authService.getUser()
    }
}
