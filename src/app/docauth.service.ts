import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username:string,password:string){

    if (username=="vishal"&& password== "vishal123"){

      sessionStorage.setItem('username', username);
      return true;

    }else{
      return false;
    }
  }
  isUserLoggedIn(){
    console.log ("Doctor is logged in")
    let user = sessionStorage.getItem('username');
    return !(user==null)
  }
  logout(){
    console.log("logout successfully")
    sessionStorage.removeItem('username');
  }
}


