import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class HelloWorldBean {
  constructor(public message: string) { }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
      private http: HttpClient
  ) { }

   executeHelloWorldBeanService() {    
    //console.log("Execute Hello World Bean Service")
   // return this.http.get('http://localhost:8080/hello-world-bean'); 
    // here we define as part of Observable

     return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean'); //Here Generics in Java
  }

  executeHelloWorldServiceWithPathVariable(name: string) {

    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    //   })

    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`, //{headers}
    );   
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'mjsingh'
  //   let password = 'mjsingh'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password); //window.btoa ==> encoding to Window Base64
  //   return basicAuthHeaderString;
  // }

}
