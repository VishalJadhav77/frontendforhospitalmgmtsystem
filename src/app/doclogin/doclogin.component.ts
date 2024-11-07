import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.css']
})
export class DocloginComponent implements OnInit {

  constructor(private router:Router, private docauth:DocauthService) { }

  ngOnInit(): void {
  }
username:string='';
password:string='';

inValidLogin= false;

checkLogin(){

  if(this.docauth.authenticate(this.username,this.password)){
            
    this.router.navigate(['docdash'])
    this.inValidLogin=false

 }
 else{
         this.inValidLogin=true
          alert("Wrong Credintials")
          this.router.navigate(['home'])
        
 }

}
}

