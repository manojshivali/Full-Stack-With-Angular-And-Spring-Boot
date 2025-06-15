import { Component, OnInit } from '@angular/core';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css'
})
export class LogoutComponent  implements OnInit  {

    constructor(
    private hardcodedAuthenticationService: HardcodedAuthentication
  ) { }

  ngOnInit() {
    this.hardcodedAuthenticationService.logout();
  }


}
