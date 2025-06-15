import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common'; // Added 

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
  standalone: true, // Generated - Change
  imports: [RouterLink, NgIf] // Added
})
// export class WelcomeComponent  {

// }


export class WelcomeComponent implements OnInit {
  name = ''
   //ActivatedRoute
  constructor(
    private route: ActivatedRoute) {

  }

   
  ngOnInit() {
    console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];

  }

}
