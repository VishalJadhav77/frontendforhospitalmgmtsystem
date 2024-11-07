import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate (username:string,password:string){
     if (username=='vishal'&& password=='123'){


       sessionStorage.setItem('username2',username);
       return true
     }
     else{
      return false
     }
  }
  isUserLoggedIn(){
    console.log ("user is logged in")
    let user = sessionStorage.getItem('username2');
    return !(user==null)
  }
  logout(){
    console.log("logout successfully")
    sessionStorage.removeItem('username2');
  }
}
