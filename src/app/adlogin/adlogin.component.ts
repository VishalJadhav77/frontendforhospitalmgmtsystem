import { Component, OnInit } from '@angular/core';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrls: ['./adlogin.component.css']
})
export class AdloginComponent {
  username:string='';
  password:string='';
  
  inValidLogin= false;
  constructor(private adminauthService:AdminauthService,private router:Router) { }

checkLogin(){

  if(this.adminauthService.authenticate(this.username,this.password)){
     this.router.navigate(['admin'])
     this.inValidLogin=false;
    
  }else{
    this.inValidLogin=true;
    alert("wrong credintials");
    this.router.navigate(['home'])
  }

}

 

}
