//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Imported
import { NgIf } from '@angular/common'; // Added
import { Router } from '@angular/router';
import { HardcodedAuthentication } from '../service/hardcoded-authentication';
//'@angular/router' is a module.

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
   FormsModule, // Added this
   NgIf
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
// export class LoginComponent {
//   username = 'mj singh'   //Component property
//   password = ''
//   errorMessage = 'Invalid Credentials'
//   invalidLogin = false

//    handleLogin() {   // Component event
//     console.log(this.username);
//     //console.log(this.password);


//     //Hardcoded Authentication
//     if(this.username==="mj singh" && this.password === 'mj singh') {
//        this.invalidLogin = false
//      } else {
//        this.invalidLogin = true
//      }
     
//   }

// }


// export class LoginComponent implements OnInit{
//   username = 'mj singh'   //Component property
//   password = ''
//   errorMessage = 'Invalid Credentials'
//   invalidLogin = false

//    //Router
//   //Angular.giveMeRouter
//   //Dependency Injection
//   constructor(private router: Router) { }

//   ngOnInit() {
//   }

//    handleLogin() {   // Component event
//     console.log(this.username);
//     //console.log(this.password);


//     //Hardcoded Authentication
//     if(this.username==="mj singh" && this.password === 'mj singh') {
//       //Redirect to Welcome Page
//        this.router.navigate(['welcome'])
//        this.invalidLogin = false
//      } else {
//        this.invalidLogin = true
//      }
     
//   }

// }

export class LoginComponent implements OnInit{
  username = 'mj singh'   //Component property
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

   //Router
  //Angular.giveMeRouter
  //Dependency Injection
  //constructor(private router: Router) { }
  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthentication) { }

  ngOnInit() {
  }

   handleLogin() {   // Component event
    console.log(this.username);
    //console.log(this.password);


    //Hardcoded Authentication
    // if(this.username==="mj singh" && this.password === 'mj singh') {
    //   //Redirect to Welcome Page
    //    this.router.navigate(['welcome', this.username])
    //    this.invalidLogin = false
    //  } else {
    //    this.invalidLogin = true
    //  }

    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
     
  }

}
