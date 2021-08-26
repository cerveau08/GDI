import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajoutperiode',
  templateUrl: './ajoutperiode.component.html',
  styleUrls: ['./ajoutperiode.component.scss']
})
export class AjoutperiodeComponent implements OnInit {
  periodeForm: FormGroup;
  constructor() { }

  ngOnInit() {
    
    this.periodeForm = new FormGroup({
      numeroPiece: new FormControl(''),
      societe: new FormControl(''),
      telephone: new FormControl(''),
      typePiece: new FormControl(''),
    });
  }

}
