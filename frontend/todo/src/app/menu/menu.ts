import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router'; // Added 
import { HardcodedAuthentication } from '../service/hardcoded-authentication';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, NgIf],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
  standalone: true, // Generated - Change
})
// export class MenuComponent {

// }

export class MenuComponent implements OnInit {
  

  constructor(public hardcodedAuthenticationService
    : HardcodedAuthentication) { }

  ngOnInit() { }

}
