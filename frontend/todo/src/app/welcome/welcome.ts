import { WelcomeDataService } from './../service/data/welcome-data';
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

  welcomeMessageFromService: string = ''

   //ActivatedRoute
  constructor(
     private route: ActivatedRoute,
     private service: WelcomeDataService) {

  }

   
  ngOnInit() {
    console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];

  }


  getWelcomeMessage() {

    //console.log("get welcome message");
    //this.service.executeHelloWorldBeanService()
    console.log(this.service.executeHelloWorldBeanService()) //Observable is not executed here.
    //this.service.executeHelloWorldBeanService().subscribe();//Observable, we can execute same service again and again if use same code again: this.service.executeHelloWorldBeanService().subscribe()
    // we need to pick up data from here.
    // this.service.executeHelloWorldBeanService().subscribe() ==> this is asynchronous call. Means this will not return result.
    // So we need to define action here.

    // this.service.executeHelloWorldBeanService().subscribe(
    //   response => this.handleSuccessfulResponse(response)
    // );

    // this.service.executeHelloWorldBeanService().subscribe(
    //   response => console.log(response)
    // );

    // this.service.executeHelloWorldBeanService().subscribe(
    //   response => this.handleSuccessfulResponse(response)
    // );

     this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log('last line of getWelcomeMessage') // this will be executed first berfor the response is received because this is asynchronus call.

    
  }


  // handleSuccessfulResponse(response: any) {
  //   console.log(response);
  // }

  // handleSuccessfulResponse(response: any) {
  //   console.log(response);
  //   console.log(response.message);
  // }


  handleSuccessfulResponse(response: any) {
    this.welcomeMessageFromService = response.message
  }

  handleErrorResponse(error: any) {
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message 
  }

  getWelcomeMessageWithParameter() {

    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

}
