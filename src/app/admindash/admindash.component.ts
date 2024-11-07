import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
  patients:Patient[]=[]
  constructor(private patientservice:PatientService, private adminauthService:AdminauthService,private router:Router) { }

  ngOnInit(): void {
    this.getpatients()
  }
  getpatients(){
    this.patientservice.getPatientList().subscribe(data=>{
      this.patients=data;
  })
}
delete(id:number){
  this.patientservice.delete(id).subscribe(data=>{
    console.log(data);
    this.getpatients();
})
}
logout(){
  this.adminauthService.logout();
  this.router.navigate(['home'])
}
}
