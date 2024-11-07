import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';


@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrls: ['./docdash.component.css']
})
export class DocdashComponent  {
  constructor(private patientservice:PatientService, private router:Router,private docauthService:DocauthService){}
  patients:Patient[]=[];
  ngOnInit():void{
    this.getpatients();
  }
  getpatients(){
    this.patientservice.getPatientList().subscribe(data=>{
      this.patients=data;
  })
  }

update(id:number){
this.router.navigate(['update-patient',id]);
}
delete(id:number){
  this.patientservice.delete(id).subscribe(data=>{
    console.log(data);
    this.getpatients();
  })
}
view(id:number){
  this.router.navigate(['view-patient',id]);
}
logout(){
   this.docauthService.logout();
  this.router.navigate(['home'])
   }
}

