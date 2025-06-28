import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'


@Injectable({
  providedIn: 'root'    //This is available at the roor level
})
export class BasicAuthenticationService
 {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username: string, password: string) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password); //window.btoa ==> encoding to Window Base64
 
    let headers = new HttpHeaders({
         Authorization: basicAuthHeaderString
       })
 
     return this.http.get<AuthenticationBean>(
      //  `http://localhost:8080/basicauth`, {headers}).pipe(
        `${API_URL}/basicauth`, {headers}).pipe(
        map(
          data => {
            // sessionStorage.setItem('authenticaterUser', username);  // to set the authenticated user in session storage
            // sessionStorage.setItem('token', basicAuthHeaderString);

            sessionStorage.setItem(AUTHENTICATED_USER, username);  // to set the authenticated user in session storage
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
       );   
  } 

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
    return sessionStorage.getItem(TOKEN)
  return null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

  executeJWTAuthenticationService(username: string, password: string) {

    return this.http.post<any>(
      `${API_URL}/authenticate`, {
      username,
      password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        }
      )
    );
    //console.log("Execute Hello World Bean Service")
  }

}

export class AuthenticationBean {
  constructor(public message: string) { }
}
