import { HttpClient } from '@angular/common/http';
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

    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`
    );   
  }
}
