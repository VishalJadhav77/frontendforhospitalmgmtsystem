import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit {
id:number=0;
patient:Patient=new Patient();
  constructor(private patientService:PatientService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  
    this.id=this.route.snapshot.params['id'];
    this.patientService.getPatientByID(this.id).subscribe(data=>{
    this.patient=data;
    } )
  }

}
