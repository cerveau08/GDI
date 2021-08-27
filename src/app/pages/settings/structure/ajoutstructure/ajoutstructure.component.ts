import { OthersService } from './../../../../services/others.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajoutstructure',
  templateUrl: './ajoutstructure.component.html',
  styleUrls: ['./ajoutstructure.component.scss']
})
export class AjoutstructureComponent implements OnInit {
  structureForm: FormGroup;
  dataDirection;
  dataDepartement;
  donneeService;
  constructor(private otherService: OthersService) { }

  ngOnInit() {
    
    this.structureForm = new FormGroup({
      libelle: new FormControl(''),
      directionId: new FormControl(''),
      service: new FormControl(''),
      typeStructureId: new FormControl(''),
      bu: new FormControl(''),
      pole: new FormControl(''),
    });
  }
  directionsListe(value) {
    this.otherService.getAllDirection(value).subscribe(
      data => {
        this.dataDirection = data['data'];
       }
    ); 
  }

  departementListe(value) {
    this.otherService.getAllDepartement(value).subscribe(
      data => {
        this.dataDepartement = data['data'];
       }
    ); 
  }

  serviceListe(value) {
    this.otherService.getAllService(value).subscribe(
      data => {
        this.donneeService = data['data'];
       }
    ); 
  }

}
