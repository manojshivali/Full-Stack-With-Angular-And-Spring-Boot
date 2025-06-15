import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'    //This is available at the roor level
})
export class HardcodedAuthentication {

  constructor() { }

  // authenticate(username: string, password: string) {
  //   if (username === "mj singh" && password === 'mj singh') {
  //     return true;
  //   }
  //   return false;
  // }


  //  authenticate(username: string, password: string) {
  //   if (username === "mj singh" && password === 'mj singh') {
  //     sessionStorage.setItem('authenticaterUser', username);
  //     return true;
  //   }
  //   return false;
  // }

  authenticate(username: string, password: string) {
    console.log('before ' + this.isUserLoggedIn());
    if (username === "mj singh" && password === 'mj singh') {
      sessionStorage.setItem('authenticaterUser', username);
      console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

    isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser')
  }

}
