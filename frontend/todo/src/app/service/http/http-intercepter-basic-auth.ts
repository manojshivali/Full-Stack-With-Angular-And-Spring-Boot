import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest  } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuth implements HttpInterceptor{

  constructor(
    private basicAuthenticationService : BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    //  let username = 'mjsingh'
    //  let password = 'mjsingh'
    //  let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser()

    //   request = request.clone({
    //     setHeaders : {
    //         Authorization : basicAuthHeaderString
    //       }
    //     }) 
    // return next.handle(request);

    if(basicAuthHeaderString && username) { 
      request = request.clone({
        setHeaders : {
            Authorization : basicAuthHeaderString
          }
        }) 
    }
    return next.handle(request);
  }
}
